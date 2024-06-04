const jwt = require('jsonwebtoken');

const generateToken = (userData) => {
	const { id, username, role } = userData;
	const payload = {
		id: id,
		username: username,
		role: role
	};

	return jwt.sign(payload, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
};

const verifyToken = (token) => {
	return jwt.verify(token, 'YOUR_SECRET_KEY');
};

module.exports = { generateToken, verifyToken };