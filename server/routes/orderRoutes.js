const express = require('express');
const router = express.Router();
const { createOrder, listOrders } = require('../controllers/orderController');
const auth = require('../middleware/auth'); // Assuming you have authentication middleware

router.post('/create', auth, createOrder);
router.get('/list', auth, listOrders);

module.exports = router;