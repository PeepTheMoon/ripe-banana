const mongoose = require('mongoose');

// const castSchema = new mongoose.Schema({
//   role: {
//     type: String,
//     required: true
//   },
//   actor: {

//   }
// })

const filmSchema = new mongoose.Schema({
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
    required: true
  }
});

filmSchema.virtual('cast', {
  ref: 'Actor',
  localField: '_id',
  foreignField: 'film'
});

filmSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'film'
});

module.exports = new mongoose.model('Film', castSchema);
