const express = require('express');
const router = express.Router();
const auth = require('../middleware/userAuth');
const { body, validationResult } = require('express-validator');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add to cart
router.post('/add', [
	auth,
	body('productId').isMongoId().withMessage('Invalid product ID format'),
	body('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { productId, quantity } = req.body;
		const userId = req.user.id;

		let cart = await Cart.findOne({ user: userId });
		if (!cart) {
			cart = new Cart({ user: userId, items: [] });
		}

		const product = await Product.findById(productId);
		if (!product) {
			return res.status(404).json({ msg: 'Product not found' });
		}

		const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
		if (itemIndex > -1) {
			// Product exists, update quantity
			cart.items[itemIndex].quantity += parseInt(quantity, 10);
		} else {
			// Product does not exist, add new item
			cart.items.push({ productId: productId, quantity: quantity });
		}
		await cart.save();
		res.status(201).json({ success: true, message: 'Product added/updated in cart successfully' });
	} catch (err) {
		console.error('Error adding to cart:', err.message);
		res.status(500).json({ success: false, message: 'Failed to add to cart' });
	}
});

// List cart items
router.get('/list', auth, async (req, res) => {
	try {
		const cart = await Cart.findOne({ user: req.user.id }).populate('items.course');
		if (!cart) {
			return res.status(404).json({ msg: 'Cart not found' });
		}
		res.json(cart);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// Delete item by ID from cart
router.delete('/delete/:itemId', auth, async (req, res) => {
	try {
		const cart = await Cart.findOne({ user: req.user.id });
		if (!cart) {
			return res.status(404).json({ msg: 'Cart not found' });
		}

		const itemIndex = cart.items.findIndex(item => item._id.toString() === req.params.itemId);
		if (itemIndex > -1) {
			cart.items.splice(itemIndex, 1);
			await cart.save();
			res.json({ msg: 'Item removed from cart' });
		} else {
			res.status(404).json({ msg: 'Item not found in cart' });
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
