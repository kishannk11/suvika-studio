const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
	categoryName: {
		type: String,
		required: true,
		trim: true
	},
	mainCategoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'MainCategory',
		required: true
	}
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

module.exports = SubCategory;
