const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
	const { name, phone, email, paymentMethod, address, products } = req.body;

	// Basic validation
	if (!name || !phone || !email || !paymentMethod || !address || !products || products.length === 0) {
		return res.status(400).json({ message: 'All fields are required and there must be at least one product.' });
	}

	try {
		// Generate orderId with prefix 'SUVK' followed by current date in YYYYMMDD format
		const date = new Date();
		const dateString = date.toISOString().split('T')[0].replace(/-/g, '');
		const orderId = `SUVK${dateString}`;

		const orderData = { ...req.body, orderId };
		const newOrder = new Order(orderData);
		const savedOrder = await newOrder.save();
		res.status(201).json({ message: 'Order created', orderId: savedOrder.orderId });
	} catch (error) {
		console.error('Order creation failed:', error);
		res.status(500).json({ message: 'Failed to create order' });
	}
};

exports.listOrders = async (req, res) => {
	try {
		const orders = await Order.find({});
		res.status(200).json({ success: true, data: orders });
	} catch (error) {
		console.error('Failed to retrieve orders:', error);
		res.status(500).json({ message: 'Failed to retrieve orders' });
	}
};

