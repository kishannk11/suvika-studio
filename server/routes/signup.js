const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../auth/jwtHelper');

// POST request to register a new user
router.post('/', [
	check('name').not().isEmpty().withMessage('Name is required'),
	check('lastName').not().isEmpty().withMessage('Last name is required'),
	check('email').isEmail().withMessage('Please include a valid email'),
	check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const { name, lastName, email, password } = req.body;

		// Check if user already exists
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: 'User already exists' });
		}

		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create a new user
		user = new User({
			name,
			lastName,
			email,
			password: hashedPassword
		});

		await user.save();

		res.status(201).json({ message: 'Registration successful' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
});

module.exports = router;
