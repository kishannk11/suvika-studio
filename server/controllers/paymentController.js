const razorpayInstance = require('../config/razorpayConfig');

exports.createOrder = async (amount) => {
	const options = {
		amount: amount * 100, // amount in the smallest currency unit
		currency: "INR",
		receipt: "order_rcptid_11"
	};

	try {
		const order = await razorpayInstance.orders.create(options);
		console.log(order);
		return {
			id: order.id,
			paymentUrl: `https://api.razorpay.com/v1/payments/${order.id}` // Construct the payment URL
		};
	} catch (error) {
		console.error(error);
		throw new Error('Failed to create payment order');
	}
};