const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwtUtils');
const { check, validationResult } = require('express-validator');

//admin
exports.signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ success: false, message: 'User not found' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ success: false, message: 'Invalid credentials' });
		}

		const token = generateToken(user);
		res.json({ success: true, message: 'Login successful', token });
	} catch (error) {
		console.error('Login Error:', error);
		res.status(500).json({ success: false, message: 'Server error' });
	}
};

exports.signUp = [
	check('email').isEmail().withMessage('Valid email is required'),
	check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ success: false, errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			// Check if user already exists
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ success: false, message: 'User already exists' });
			}

			// Hash the password
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			// Create new user
			user = new User({
				email,
				password: hashedPassword,
				role: 'user'  // Default role for new sign-ups
			});

			await user.save();
			res.status(201).json({ success: true, message: 'User registered successfully' });
		} catch (error) {
			console.error('Error during sign-up:', error);
			res.status(500).json({ success: false, message: 'Server error' });
		}
	}
];