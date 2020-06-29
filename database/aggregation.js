const ratingAggregation = [
  {
    '$sort': {
      'rating': -1
    }
  }, {
    '$limit': 100
  }, {
    '$lookup': {
      'from': 'films', 
      'localField': 'film', 
      'foreignField': '_id', 
      'as': 'film'
    }
  }, {
    '$unwind': {
      'path': '$film'
    }
  }, {
    '$project': {
      'rating': true, 
      'review': true, 
      'film': {
        '_id': true, 
        'title': true
      }
    }
  }
];

module.exports = {
  ratingAggregation
};
