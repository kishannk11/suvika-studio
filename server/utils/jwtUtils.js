const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key'; // Ensure you have a secure secret key

exports.generateToken = (user) => {
	return jwt.sign(
		{
			id: user._id,
			email: user.email,
			role: user.role
		},
		JWT_SECRET,
		{ expiresIn: '10h' } // Token expires in 10 hours
	);
};

exports.generateTokenforStudent = (userData) => {
	return jwt.sign(userData, JWT_SECRET, { expiresIn: '1h' });  // Token expires in 1 hour
};

