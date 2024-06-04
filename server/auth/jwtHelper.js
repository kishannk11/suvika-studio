const jwt = require('jsonwebtoken');

<<<<<<< HEAD
const generateToken = (user) => {
	return jwt.sign({ id: user.id, role: user.role }, 'YOUR_SECRET_KEY', { expiresIn: '10h' });
=======
const generateToken = (userData) => {
	const { id, username, role } = userData;
	const payload = {
		id: id,
		username: username,
		role: role
	};

	return jwt.sign(payload, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076
};

const verifyToken = (token) => {
	return jwt.verify(token, 'YOUR_SECRET_KEY');
};

module.exports = { generateToken, verifyToken };