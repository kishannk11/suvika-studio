const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	productName: {
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
		type: String, // Assuming images are stored as URLs
		required: true,
	}],
});

module.exports = mongoose.model('Product', ProductSchema);