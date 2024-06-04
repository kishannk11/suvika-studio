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

exports.createPaymentLink = async (amount, customerDetails) => {
	const options = {
		amount: amount * 100, // Convert to the smallest currency unit
		currency: "INR",
		accept_partial: false,
		description: "Payment for order",
		customer: {
			name: customerDetails.name,
			contact: customerDetails.contact,
			email: customerDetails.email
		},
		notify: {
			sms: true,
			email: true
		},
		reminder_enable: true,
		notes: {
			additionalInfo: "Any additional information"
		},
		callback_url: "http://localhost:5000/api/payment/callback",
		callback_method: "get"
	};

	try {
		const paymentLink = await razorpayInstance.paymentLink.create(options);
		return paymentLink;
	} catch (error) {
		console.error(error);
		throw new Error('Failed to create payment link');
	}
};