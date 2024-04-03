const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { login } = require('./auth/authController');

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000',
}));

connectDB();
app.use(express.json({ extended: false }));
app.post('/api/login', login);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

