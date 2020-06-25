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
  studio: { // populate studio name?
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Studio',
    required: true
  },
  cast: [{
    role: {
      type: String,
      required: true
    },
    actor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Actor',
      required: true
    }
  }]
});

schema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'film'
});

module.exports = new mongoose.model('Film', schema);
