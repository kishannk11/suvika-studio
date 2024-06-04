const express = require('express');
const router = express.Router();
const auth = require('../middleware/userAuth');
const adminAuth = require('../middleware/auth');
const Checkout = require('../models/Checkout');
const Cart = require('../models/Cart'); // Ensure Cart model is imported
const Product = require('../models/Product'); // Ensure Product model is imported
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
		let checkoutItems = []; // Array to hold transformed items for checkout

		for (const item of cart.items) {
			const product = await Product.findById(item.productId);
			if (product) {
				totalAmount += product.productPrice * item.quantity;
				checkoutItems.push({
					product: item.productId, // Use productId here to match the Checkout schema's product field
					quantity: item.quantity
				});
			}
		}

		// Create payment order using Razorpay
		const paymentOrder = await paymentController.createOrder(totalAmount);

		const newCheckout = new Checkout({
			user: req.user.id,
			address,
			street,
			city,
			state,
			zipCode,
			country,
			totalAmount,
			items: checkoutItems, // Use the transformed items array
			razorpayOrderId: paymentOrder.id // Store Razorpay order ID
		});

		const checkout = await newCheckout.save();
		res.json({ paymentUrl: paymentOrder.paymentUrl });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;

// List all checkouts for admin, specific user checkouts for user
router.get('/', auth, async (req, res) => {
	try {
		if (req.user.role === 'admin') {
			const checkouts = await Checkout.find().populate('user', ['name']);
			res.json(checkouts);
		} else {
			const checkouts = await Checkout.find({ user: req.user.id });
			res.json(checkouts);
		}
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
