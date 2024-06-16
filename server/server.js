const cluster = require('cluster');
const os = require('os');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const { login } = require('./auth/authController');
const products = require('./routes/products');
const maincategory = require('./routes/maincategory');
const subcategory = require('./routes/subcategory');
const signup = require('./routes/signup');
const order = require('./routes/orderRoutes');
const { userLogin } = require('./auth/userLogin');
const cart = require('./routes/cart');
const checkout = require('./routes/checkout');
const coupon = require('./routes/couponRoutes');

if (cluster.isMaster) {
	const numCPUs = os.cpus().length;
	console.log(`Master process is running with PID: ${process.pid}`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
		console.log('Forking a new worker');
		cluster.fork();
	});
} else {
	const app = express();
	const port = 5000;

	app.use(cors({
		origin: ['http://localhost:3000', 'https://admin.suvikastudio.com', 'https://suvikaadmin.duckdns.org'],
	}));
	app.use(helmet());
	connectDB();
	app.use('/uploads', express.static('uploads', {
		setHeaders: (res, path, stat) => {
			res.set('Cross-Origin-Resource-Policy', 'cross-origin');
		}
	}));

	app.use(express.json({ extended: false }));
	app.post('/api/login', login);
	app.use('/api/products', products);
	app.use('/api/maincategory', maincategory);
	app.use('/api/subcategory', subcategory);
	app.use('/api/signup', signup);
	app.use('/api/userLogin', userLogin);
	app.use('/api/orders', order);
	app.use('/api/cart', cart);
	app.use('/api/checkout', checkout);
	app.use('/api/coupons', coupon);

	app.listen(port, () => {
		console.log(`Worker ${process.pid} started, Server is running on http://localhost:${port}`);
	});
}