const Admin = require('../models/Admin');
const { generateToken } = require('./jwtHelper');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const admin = await Admin.findOne({ username });
		if (!admin) {
			return res.status(404).json({ message: 'Admin not found' });
		}

		const isMatch = await bcrypt.compare(password, admin.password);
		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid credentials' });
		}

		// Ensure the role is included in the token
		const token = generateToken({
			id: admin.id,
			username: admin.username,
			role: admin.role  // Include the role in the token
		});

		res.json({ token });  // Optionally send role back to client
	} catch (err) {
		console.error(err);
		res.status(500).send('Server error');
	}
};

module.exports = { login };