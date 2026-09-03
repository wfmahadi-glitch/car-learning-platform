const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

// Placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all services' });
});

router.get('/:id', (req, res) => {
  res.json({ message: 'Get single service' });
});

router.post('/', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Create service' });
});

router.put('/:id', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Update service' });
});

router.delete('/:id', protect, authorize('admin'), (req, res) => {
  res.json({ message: 'Delete service' });
});

router.post('/:id/book', protect, (req, res) => {
  res.json({ message: 'Book service' });
});

module.exports = router;
