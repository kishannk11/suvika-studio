const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const { login } = require('./auth/authController');
<<<<<<< HEAD
const products = require('./routes/api/products');
const maincategory = require('./routes/api/maincategory');
const subcategory = require('./routes/api/subcategory');
=======
const products = require('./routes/products');
const maincategory = require('./routes/maincategory');
const subcategory = require('./routes/subcategory');
const signup = require('./routes/signup');
const { userLogin } = require('./auth/userLogin');
const cart = require('./routes/cart');
const checkout = require('./routes/checkout');

>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076
const app = express();
const port = 5000;

app.use(cors({
<<<<<<< HEAD
    origin: 'http://localhost:3000',
=======
	origin: 'http://localhost:3000',
>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076
}));
app.use(helmet());
connectDB();
app.use('/uploads', express.static('uploads', {
<<<<<<< HEAD
    setHeaders: (res, path, stat) => {
        res.set('Cross-Origin-Resource-Policy', 'cross-origin');
    }
=======
	setHeaders: (res, path, stat) => {
		res.set('Cross-Origin-Resource-Policy', 'cross-origin');
	}
>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076
}));

app.use(express.json({ extended: false }));
app.post('/api/login', login);
app.use('/api/products', products);
app.use('/api/maincategory', maincategory);
app.use('/api/subcategory', subcategory);
<<<<<<< HEAD


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
=======
app.use('/api/signup', signup);
app.use('/api/userLogin', userLogin);
app.use('/api/cart', cart);
app.use('/api/checkout', checkout);


app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
>>>>>>> a0d37472d8fb3c335e48951abe0c68b35d554076
});

