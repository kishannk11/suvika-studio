const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { login } = require('./auth/authController');
const products = require('./routes/api/products');
const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000',
}));

connectDB();
app.use('/uploads', express.static('uploads'));
app.use(express.json({ extended: false }));
app.post('/api/login', login);
app.use('/api/products', products);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

