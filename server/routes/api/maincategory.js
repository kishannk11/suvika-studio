const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const MainCategory = require('../../models/MainCategory');

// POST request to add a new category
router.post('/add', auth, async (req, res) => {
	try {
		const { categoryName } = req.body;
		const newCategory = new MainCategory({ categoryName });
		const savedCategory = await newCategory.save();
		res.status(201).json(savedCategory);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.get('/list', auth, async (req, res) => {
	try {
		const categories = await MainCategory.find();
		res.json(categories);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.delete('/delete/:id', auth, async (req, res) => {
	try {
		await MainCategory.findByIdAndDelete(req.params.id);
		res.status(204).json({ message: 'Category deleted successfully' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;

