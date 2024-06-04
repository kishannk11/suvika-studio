const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	address: { type: String, required: true },
	street: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	zipCode: { type: String, required: true },
	country: { type: String, required: true },
	orderId: {
		type: String,
		required: true,
		default: () => `ORD${Date.now()}`
	},
	razorpayOrderId: { type: String, required: true },
	totalAmount: {
		type: Number,
		required: true,
		default: 0
	},
	paymentStatus: { type: String, required: true, default: 'PENDING' },
	items: [{
		product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
		quantity: { type: Number, required: true }
	}]
}, { timestamps: true });

module.exports = mongoose.model('Checkout', CheckoutSchema);


