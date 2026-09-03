const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

router.post('/create-payment-intent', protect, (req, res) => {
  res.json({ message: 'Create payment intent' });
});

router.post('/confirm-payment', protect, (req, res) => {
  res.json({ message: 'Confirm payment' });
});

router.get('/history', protect, (req, res) => {
  res.json({ message: 'Get payment history' });
});

router.post('/webhook', (req, res) => {
  res.json({ message: 'Payment webhook' });
});

module.exports = router;
