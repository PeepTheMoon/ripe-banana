const mongoose = require('mongoose');

const schema = new mongoose.Schema({

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
  },
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

schema.virtual('films', {
  ref: 'Film',
  localField: '_id',
  foreignField: 'review'
});

module.exports = mongoose.model('Review', schema);
