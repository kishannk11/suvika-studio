const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const MainCategory = require('../models/MainCategory');
const { check, validationResult } = require('express-validator');
// POST request to add a new category
router.post('/add', [
	auth,
	check('categoryName').not().isEmpty().withMessage('Category name is required'),
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { categoryName } = req.body;
		// Check if the category already exists to prevent duplicate key error
		const existingCategory = await MainCategory.findOne({ categoryName });
		if (existingCategory) {
			return res.status(400).json({ message: 'Category already exists' });
		}
		const newMainCategory = new MainCategory({ categoryName });
		const savedMainCategory = await newMainCategory.save();
		res.status(201).json(savedMainCategory);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

router.get('/list', auth, async (req, res) => {
	try {
		const categories = await MainCategory.find();
		res.status(200).json({ status: true, data: categories });
	} catch (error) {
		console.error(error); // Log the error for server-side inspection
		res.status(500).json({ message: 'An error occurred while fetching the categories' });
	}
});

router.delete('/delete/:id', [
	auth,
	check('id', 'Invalid ID').isMongoId()
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		await MainCategory.findByIdAndDelete(req.params.id);
		res.status(204).json({ message: 'Category deleted successfully' });
	} catch (error) {
		console.error(error); // Log the error for server-side inspection
		res.status(500).json({ message: 'An error occurred while deleting the category' });
	}
});
router.put('/update/:id', [
	auth,
	check('id', 'Invalid ID').isMongoId()
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const { categoryName } = req.body;
		const updatedCategory = await MainCategory.findByIdAndUpdate(req.params.id, { categoryName }, { new: true });
		if (!updatedCategory) {
			return res.status(404).json({ message: 'Category not found' });
		}
		res.json(updatedCategory);
	} catch (error) {
		console.error(error); // Log the error for server-side inspection
		res.status(500).json({ message: 'An error occurred while updating the category' });
	}
});


module.exports = router;

