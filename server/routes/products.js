const express = require('express');
const path = require('path');
const router = express.Router();
const auth = require('../middleware/auth');
const Product = require('../models/Product');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({ storage: storage });

router.post('/add', auth, upload.array('productImages'), async (req, res) => {
	try {
		const { productName, productDescription, productPrice, productDiscount, mainCategoryId, subCategoryId, discountType, productColors, productTrending, productMaterialCare, productWeight, additionalInfo, productPreOrder } = req.body;
		let productImages = [];
		if (req.files) {
			productImages = req.files.map(file => file.path);
		}

		const newProduct = new Product({
			productName,
			productDescription,
			productPrice,
			productDiscount,
			productImages,
			mainCategoryId,
			subCategoryId,
			discountType,
			productColors,
			productTrending,
			productMaterialCare,
			productWeight,
			additionalInfo,
			productPreOrder
		});

		const product = await newProduct.save();
		res.json(product);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.get('/list', auth, async (req, res) => {
	try {
		const products = await Product.find({}).populate('mainCategoryId', 'categoryName').populate('subCategoryId', 'categoryName');
		res.json(products);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.get('/preorders', auth, async (req, res) => {
	try {
		const preorders = await Product.find({
			productPreOrder: true
		}).populate('mainCategoryId', 'categoryName').populate('subCategoryId', 'categoryName');
		res.json(preorders);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.get('/get/:id', auth, async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(404).json({ msg: 'Product not found' });
		}
		res.status(200).json({ success: true, data: product });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});


router.get('/list-guest', async (req, res) => {
	try {
		const products = await Product.find({});
		res.json(products);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.get('/search', auth, async (req, res) => {
	try {
		const query = req.query.query;
		console.log(query);
		if (!query || query.length < 2) {
			return res.status(400).json({ msg: 'Query must be at least 2 characters long' });
		}

		const products = await Product.find({
			productName: { $regex: query, $options: 'i' }
		}).catch(err => {
			if (err.kind === 'ObjectId') {
				return res.status(400).json({ msg: 'Invalid query format' });
			}
			throw err;
		});

		res.json(products);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});


router.delete('/delete/:id', auth, async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(404).json({ msg: 'Product not found' });
		}

		await Product.deleteOne({ _id: req.params.id });
		res.json({ msg: 'Product removed' });
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(404).json({ msg: 'Product not found' });
		}
		res.status(500).send('Server Error');
	}
});

module.exports = router;