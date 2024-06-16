const express = require('express');
const router = express.Router();
const { addCoupon, listCoupons, updateCoupon, deleteCoupon, toggleCouponStatus, getCouponById } = require('../controllers/couponController');
const auth = require('../middleware/auth');

router.post('/add', auth, addCoupon);
router.get('/list', auth, listCoupons);
router.put('/update/:couponId', auth, updateCoupon);
router.delete('/delete/:couponId', auth, deleteCoupon);
router.put('/toggle-status/:couponId', auth, toggleCouponStatus);
router.get('/:couponId', auth, getCouponById);

module.exports = router;
