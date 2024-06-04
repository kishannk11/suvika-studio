
const User = require('../models/User');
const { generateToken } = require('./jwtHelper');
const bcrypt = require('bcryptjs');

const userLogin = async (req, res) => {
	const { email, password } = req.body;
	console.log(email, password);
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid credentials' });
		}

		const token = generateToken(user);
		res.json({ token });
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
};

module.exports = { userLogin };
