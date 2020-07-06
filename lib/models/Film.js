const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  released: {
    type: Date,
    required: true
  },
  studio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Studio',
    required: true
  },
  cast: [{
    role: {
      type: String
    },
    actor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Actor',
      required: true
    }
  }]
}, {
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  }
});

schema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'film'
});

module.exports = new mongoose.model('Film', schema);
