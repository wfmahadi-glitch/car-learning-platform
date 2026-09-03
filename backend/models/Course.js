const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['গাড়ি কেনা', 'গাড়ির মেইনটেনেন্স', 'গাড়ির ভ্যালু অ্যাসেসমেন্ট', 'অন্যান্য'],
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  price: {
    type: Number,
    default: 0,
  },
  image: String,
  videos: [{
    title: String,
    url: String,
    duration: Number,
  }],
  materials: [{
    title: String,
    file: String,
  }],
  quizzes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  enrolledCount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft',
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

module.exports = mongoose.model('Course', courseSchema);
