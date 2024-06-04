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
<<<<<<< HEAD
		type: String, // Assuming images are stored as URLs
		required: true,
	}],
});
=======
		type: String,
		required: true,
	}],

}, { timestamps: true });
>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076

module.exports = mongoose.model('Product', ProductSchema);