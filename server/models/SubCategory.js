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
<<<<<<< HEAD
	}
});
=======
	},

}, { timestamps: true });
>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);

module.exports = SubCategory;
