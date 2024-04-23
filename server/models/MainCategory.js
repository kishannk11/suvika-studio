const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	categoryName: {
		type: String,
		required: true,
		unique: true, // Assuming each category name should be unique
	},
}, { timestamps: true });

module.exports = mongoose.model('MainCategory', categorySchema);

