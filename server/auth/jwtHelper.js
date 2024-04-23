const jwt = require('jsonwebtoken');

const generateToken = (user) => {
	return jwt.sign({ id: user.id, role: user.role }, 'YOUR_SECRET_KEY', { expiresIn: '10h' });
};

const verifyToken = (token) => {
	return jwt.verify(token, 'YOUR_SECRET_KEY');
};

module.exports = { generateToken, verifyToken };