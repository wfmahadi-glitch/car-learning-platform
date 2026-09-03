const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: String,
  price: {
    type: Number,
    required: true,
  },
  image: String,
  features: [String],
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Service', serviceSchema);
