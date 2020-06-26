const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  film: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Film',
    required: true
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }, 

  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reviewer',
    required: true
  },

  review: {
    type: String,
    maxlength: 140,
    required: true
  }
});

module.exports = mongoose.model('Review', schema);
