const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
	couponCode: {
		type: String,
		required: true,
		unique: true
	},
	expiryDate: {
		type: Date,
		required: true
	},
	discountPercentage: {
		type: Number,
		required: true,
		min: 0
	},
	discountType: {
		type: String,
		required: true,
		enum: ['percentage', 'cash']
	},
	isActive: {
		type: Boolean,
		default: false
	}
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
