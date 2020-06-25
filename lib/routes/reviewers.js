const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router()
  .get('/', (req, res, next) => {
    Reviewer
      .find()
      .then(reviewers => res.send(reviewers))
      .catch(next);
  });

// .get('/:id', (req, res, next) => {
//   Reviewer
//     .findById(req.params.id)
//     .populate('reviews', { rating: true, review: true, film: true })
//     .then(reviewer => res.send(reviewer))
//     .catch(next);
// });
