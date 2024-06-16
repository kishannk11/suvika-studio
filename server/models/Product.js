const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	productName: {
		type: String,
		required: true,
	},
	mainCategoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'MainCategory',
		required: true,
	},
	subCategoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'SubCategory',
		required: true,
	},
	discountType: {
		type: String,
		required: true,
	},
	productDescription: {
		type: String,
		required: true,
	},
	productPrice: {
		type: Number,
		required: true,
	},
	productQuantity: {
		type: Number,
		required: true,
	},
	productDiscount: {
		type: Number,
		required: true,
	},
	productTaxRate: {
		type: Number,
		required: true,
	},
	productImages: [{
		type: String,
		required: true,
	}],

}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);