const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
	const { name, phone, email, paymentMethod, address, products } = req.body;

	// Basic validation
	if (!name || !phone || !email || !paymentMethod || !address || !products || products.length === 0) {
		return res.status(400).json({ message: 'All fields are required and there must be at least one product.' });
	}

	try {
		const newOrder = new Order(req.body);
		const savedOrder = await newOrder.save();
		res.status(201).json({ message: 'Order created' });
	} catch (error) {
		console.error('Order creation failed:', error);
		res.status(500).json({ message: 'Failed to create order' });
	}
};

exports.listOrders = async (req, res) => {
	try {
		const orders = await Order.find({});
		res.status(200).json(orders);
	} catch (error) {
		console.error('Failed to retrieve orders:', error);
		res.status(500).json({ message: 'Failed to retrieve orders' });
	}
};

