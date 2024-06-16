const Coupon = require('../models/Coupon');

exports.addCoupon = async (req, res) => {
	const { couponCode, expiryDate, discountPercentage, discountType } = req.body;

	if (!couponCode || !expiryDate || !discountPercentage || !discountType) {
		return res.status(400).json({ message: 'All fields are required.' });
	}

	try {
		const newCoupon = new Coupon({
			couponCode,
			expiryDate,
			discountPercentage,
			discountType,
			isActive: true
		});
		const savedCoupon = await newCoupon.save();
		res.status(201).json({ message: 'Coupon added successfully', coupon: savedCoupon });
	} catch (error) {
		console.error('Coupon creation failed:', error);
		res.status(500).json({ message: 'Failed to add coupon' });
	}
};

exports.listCoupons = async (req, res) => {
	try {
		const coupons = await Coupon.find({});
		res.status(200).json({ success: true, data: coupons });
	} catch (error) {
		console.error('Failed to retrieve coupons:', error);
		res.status(500).json({ message: 'Failed to retrieve coupons' });
	}
};

exports.updateCoupon = async (req, res) => {
	const { couponCode, expiryDate, discountPercentage, discountType, isActive } = req.body;
	const couponId = req.params.couponId;

	if (!couponId) {
		return res.status(400).json({ message: 'Coupon ID is required.' });
	}

	try {
		const updatedCoupon = await Coupon.findByIdAndUpdate(
			couponId,
			{ couponCode, expiryDate, discountPercentage, discountType, isActive },
			{ new: true }
		);
		if (!updatedCoupon) {
			return res.status(404).json({ message: 'Coupon not found.' });
		}
		res.status(200).json({ message: 'Coupon updated successfully', coupon: updatedCoupon });
	} catch (error) {
		console.error('Coupon update failed:', error);
		res.status(500).json({ message: 'Failed to update coupon' });
	}
};

exports.deleteCoupon = async (req, res) => {
	const couponId = req.params.couponId;

	if (!couponId) {
		return res.status(400).json({ message: 'Coupon ID is required.' });
	}

	try {
		const deletedCoupon = await Coupon.findByIdAndDelete(couponId);
		if (!deletedCoupon) {
			return res.status(404).json({ message: 'Coupon not found.' });
		}
		res.status(200).json({ message: 'Coupon deleted successfully' });
	} catch (error) {
		console.error('Coupon deletion failed:', error);
		res.status(500).json({ message: 'Failed to delete coupon' });
	}
};

exports.toggleCouponStatus = async (req, res) => {
	const couponId = req.params.couponId;

	if (!couponId) {
		return res.status(400).json({ message: 'Coupon ID is required.' });
	}

	try {
		const coupon = await Coupon.findById(couponId);
		if (!coupon) {
			return res.status(404).json({ message: 'Coupon not found.' });
		}
		coupon.isActive = !coupon.isActive;
		const updatedCoupon = await coupon.save();
		res.status(200).json({ message: 'Coupon status updated successfully', coupon: updatedCoupon });
	} catch (error) {
		console.error('Coupon status update failed:', error);
		res.status(500).json({ message: 'Failed to update coupon status' });
	}
};

exports.getCouponById = async (req, res) => {
	const couponId = req.params.couponId;

	if (!couponId) {
		return res.status(400).json({ message: 'Coupon ID is required.' });
	}

	try {
		const coupon = await Coupon.findById(couponId);
		if (!coupon) {
			return res.status(404).json({ message: 'Coupon not found.' });
		}
		res.status(200).json({ coupon });
	} catch (error) {
		console.error('Error fetching coupon:', error);
		res.status(500).json({ message: 'Failed to fetch coupon' });
	}
};


