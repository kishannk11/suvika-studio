const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const { login } = require('./auth/authController');
const products = require('./routes/api/products');
const maincategory = require('./routes/api/maincategory');
const subcategory = require('./routes/api/subcategory');
const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000',
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


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

