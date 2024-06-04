const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
	key_id: 'rzp_test_Q6oYom6ENkwsuR', // Replace with your key ID
	key_secret: 'MJ5v3H0oV82DhMebzNm22oJI' // Replace with your key secret
});

module.exports = razorpayInstance;