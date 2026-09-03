const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

// All admin routes require authentication and admin role
router.use(protect, authorize('admin'));

router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin dashboard data' });
});

router.get('/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

router.get('/courses-stats', (req, res) => {
  res.json({ message: 'Get courses statistics' });
});

router.get('/services-stats', (req, res) => {
  res.json({ message: 'Get services statistics' });
});

router.get('/payments-stats', (req, res) => {
  res.json({ message: 'Get payments statistics' });
});

router.get('/bookings', (req, res) => {
  res.json({ message: 'Get all bookings' });
});

module.exports = router;
