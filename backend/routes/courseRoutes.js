const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

// Placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all courses' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get single course' });
});

router.post('/', protect, authorize('admin', 'instructor'), (req, res) => {
  res.json({ message: 'Create course' });
});

router.put('/:id', protect, authorize('admin', 'instructor'), (req, res) => {
  res.json({ message: 'Update course' });
});

router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Delete course' });
});

router.post('/:id/enroll', protect, (req, res) => {
  res.json({ message: 'Enroll in course' });
});

module.exports = router;
