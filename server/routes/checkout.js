const express = require('express');
const router = express.Router();
const auth = require('../middleware/userAuth');
const adminAuth = require('../middleware/auth');
const Checkout = require('../models/Checkout');
const Cart = require('../models/Cart'); // Ensure Cart model is imported
const Product = require('../models/Product'); // Ensure Product model is imported
const User = require('../models/User'); // Ensure User model is imported
const paymentController = require('../controllers/paymentController');
const { body, validationResult } = require('express-validator');

router.post('/create', [
	auth,
	body('address').notEmpty().withMessage('Address is required'),
	body('street').notEmpty().withMessage('Street is required'),
	body('city').notEmpty().withMessage('City is required'),
	body('state').notEmpty().withMessage('State is required'),
	body('zipCode').notEmpty().withMessage('Zip code is required'),
	body('country').notEmpty().withMessage('Country is required')
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { address, street, city, state, zipCode, country } = req.body;
		const cart = await Cart.findOne({ user: req.user.id });
		if (!cart) {
			return res.status(404).send('Cart not found');
		}

		let totalAmount = 0;
		let checkoutItems = [];

		for (const item of cart.items) {
			const product = await Product.findById(item.productId);
			console.log(product);
			if (product) {
				totalAmount += product.productPrice * item.quantity;
				checkoutItems.push({
					product: item.productId,
					quantity: item.quantity
				});
			}
		}

		// Fetch user details from User table
		const user = await User.findById(req.user.id).select('name lastName email');

		// Create payment link using Razorpay
		const customerDetails = {
			name: user.name + ' ' + user.lastName, // Concatenate name and lastName
			contact: "8105897579", // Placeholder for actual customer contact
			email: user.email // Use email from User table
		};
		const paymentLink = await paymentController.createPaymentLink(totalAmount, customerDetails);

		const newCheckout = new Checkout({
			user: req.user.id,
			address,
			street,
			city,
			state,
			zipCode,
			country,
			totalAmount,
			items: checkoutItems,
			razorpayOrderId: paymentLink.id // Store Razorpay payment link ID
		});

		const checkout = await newCheckout.save();
		res.json({ paymentUrl: paymentLink.short_url }); // Send the short URL to the frontend
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// List all checkouts for admin, specific user checkouts for user
router.get('/', auth, async (req, res) => {
	try {
		const checkouts = await Checkout.find({ user: req.user.id }).populate('user', ['name']);
		res.json(checkouts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
