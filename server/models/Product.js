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
	productColors: [{
		type: String,
		required: true,
	}],
	productTrending: [{
		type: String,
		required: true,
	}],
	productMaterialCare: {
		type: String,
		required: true,
	},
	additionalInfo: {
		type: String,
		required: false,
	},
	productWeight: {
		type: String,
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
	productPreOrder: {
		type: Boolean,
		required: true,
	},

}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);