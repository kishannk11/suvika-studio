const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	name: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	paymentMethod: { type: String, required: true },
	address: { type: String, required: true },
	comment: { type: String },
	products: [{
		productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
		quantity: { type: Number, required: true },
		discount: { type: Number, required: true },
		productPrice: { type: Number, required: true }
	}]
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);