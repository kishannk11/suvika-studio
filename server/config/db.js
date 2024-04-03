const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		await mongoose.connect('mongodb://suvika:suvika123@127.0.0.1:27017/suvika?authSource=suvika');
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;



