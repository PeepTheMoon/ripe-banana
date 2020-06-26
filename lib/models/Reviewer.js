const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  }
});


schema.statics.deleteReviewer = function(id) {
  return this.model('Review')
    .find({ reviewer: id })
    .then(reviews => {
      return reviews.length < 1 ? this.findByIdAndDelete(id) : function() {
        throw Error('This reviewer has reviews, cannot delete!');
      };
    });
};


module.exports = mongoose.model('Reviewer', schema);
