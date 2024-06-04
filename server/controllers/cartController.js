const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
	const { courseId } = req.body;
	const userId = req.user.id; // Assuming the user ID is attached to the request

	try {
		let cart = await Cart.findOne({ user: userId });
		if (!cart) {
			cart = new Cart({ user: userId, items: [] });
		}

		const courseExists = cart.items.find(item => item.course.toString() === courseId);
		if (courseExists) {
			// If the course already exists in the cart, send a message instead of adding it again
			return res.status(409).json({ success: false, message: 'Course already exists in cart' });
		} else {
			cart.items.push({ course: courseId, quantity: 1 });
			await cart.save();
			res.status(201).json({ success: true, message: 'Course added to cart successfully' });
		}
	} catch (error) {
		console.error('Error adding to cart:', error);
		res.status(500).json({ success: false, message: 'Failed to add to cart' });
	}
};

exports.viewCart = async (req, res) => {
	const userId = req.user.id; // Assuming the user ID is attached to the request

	try {
		const cart = await Cart.findOne({ user: userId }).populate({
			path: 'items.course',
			select: 'title courseImage price discountPrice _id'
		});
		if (!cart) {
			return res.status(404).json({ success: false, message: 'Cart not found' });
		}

		// Calculate the total price and total discounted price of the cart
		let totalPrice = 0;
		let totalDiscountedPrice = 0;
		cart.items.forEach(item => {
			totalPrice += item.course.price * item.quantity;
			totalDiscountedPrice += item.course.discountPrice * item.quantity;
		});

		// Modify the data structure to only send necessary information
		const cartData = {
			items: cart.items.map(item => ({
				id: item.course._id,
				title: item.course.title,
				courseImage: item.course.courseImage,
				price: item.course.price,
				discountedPrice: item.course.discountPrice,
				quantity: item.quantity
			})),
			totalPrice,
			totalDiscountedPrice
		};

		res.status(200).json({ success: true, data: cartData });
	} catch (error) {
		console.error('Error retrieving cart:', error);
		res.status(500).json({ success: false, message: 'Failed to retrieve cart' });
	}
};

exports.deleteCart = async (req, res) => {
	const userId = req.user.id; // Assuming the user ID is attached to the request
	const cartId = req.params.cartId; // Get cart ID from the URL
	console.log(userId);
	try {
		// Find the cart based on userId
		const cart = await Cart.findOne({ user: userId });
		if (!cart) {
			return res.status(404).json({ success: false, message: 'Cart not found' });
		}

		// Check if cartId exists within items.course._id
		const itemIndex = cart.items.findIndex(item => item.course.toString() === cartId);
		if (itemIndex === -1) {
			return res.status(404).json({ success: false, message: 'Cart item not found' });
		}

		// Remove the item from the cart
		cart.items.splice(itemIndex, 1);

		// If the cart is empty after removal, delete the cart
		if (cart.items.length === 0) {
			await cart.deleteOne(); // Use deleteOne to remove the cart
			return res.status(200).json({ success: true, message: 'Cart deleted successfully' });
		} else {
			// Otherwise, save the cart
			await cart.save();
			return res.status(200).json({ success: true, message: 'Cart item deleted successfully' });
		}
	} catch (error) {
		console.error('Error deleting cart:', error);
		res.status(500).json({ success: false, message: 'Failed to delete cart' });
	}
};


