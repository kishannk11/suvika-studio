const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const SubCategory = require('../models/SubCategory');
const { check, validationResult } = require('express-validator');
// POST request to add a new subcategory
router.post('/add', [
	auth,
	check('categoryName').not().isEmpty().withMessage('Category name is required'),
	check('mainCategoryId').isMongoId().withMessage('Invalid main category ID')
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const { categoryName, mainCategoryId } = req.body;
		// Check if the subcategory already exists
		const existingSubCategory = await SubCategory.findOne({ categoryName, mainCategoryId });
		if (existingSubCategory) {
			return res.status(409).json({ message: 'Subcategory already exists' });
		}
		const newSubCategory = new SubCategory({ categoryName, mainCategoryId });
		const savedSubCategory = await newSubCategory.save();
		res.status(201).json(savedSubCategory);
	} catch (error) {
		console.error(error); // Log the error for server-side inspection
		res.status(500).json({ message: 'An error occurred while adding the subcategory' });
	}
});

// GET request to list all subcategories
router.get('/list', auth, async (req, res) => {
	try {
		const subcategories = await SubCategory.find().populate('mainCategoryId');
		res.status(200).json({ status: true, data: subcategories });
	}
	catch (error) {
		console.error(error); // Log the error for server-side inspection
		res.status(500).json({ message: 'An error occurred while adding the subcategory' });
	}
});

// DELETE request to delete a subcategory
router.delete('/delete/:id', [
	auth,
	check('id', 'Invalid ID').isMongoId()
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		await SubCategory.findByIdAndDelete(req.params.id);
		res.status(204).json({ message: 'Subcategory deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred while deleting the subcategory' });
	}
});

// PUT request to update a subcategory
router.put('/update/:id', [
	auth,
	check('id', 'Invalid ID').isMongoId()
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const { categoryName, mainCategoryId } = req.body;
		const updatedSubCategory = await SubCategory.findByIdAndUpdate(
			req.params.id,
			{ categoryName, mainCategoryId },
			{ new: true }
		);
		if (!updatedSubCategory) {
			return res.status(404).json({ message: 'Subcategory not found' });
		}
		res.json(updatedSubCategory);
	} catch (error) {
		console.error(error); // Log the error for server-side inspection
		res.status(500).json({ message: 'An error occurred while updating the subcategory' });
	}
});

// GET request to fetch a subcategory by ID
router.get('/fetch/:mainCategoryId', [
	auth,
	check('mainCategoryId', 'Invalid ID').isMongoId()
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const subCategories = await SubCategory.find({ mainCategoryId: req.params.mainCategoryId });
		if (!subCategories.length) {
			return res.status(404).json({ message: 'No subcategories found for the provided main category ID' });
		}
		res.status(200).json({ status: true, data: subCategories });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'An error occurred while fetching the subcategories' });
	}
});


module.exports = router;
