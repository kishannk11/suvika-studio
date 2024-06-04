const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	const tokenHeader = req.header('Authorization');
	if (!tokenHeader) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	const token = tokenHeader.replace('Bearer ', '');

	try {
		const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
		req.user = decoded;

		// Example authorization check
		if (req.user.role !== 'user') {
			return res.status(403).json({ msg: 'Access denied' });
		}

		next();
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};