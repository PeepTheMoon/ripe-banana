const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router()
  .get('/', (req, res, next) => {
    Reviewer
      .find()
      .then(reviewers => res.send(reviewers))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    Reviewer
      .create(req.body)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Reviewer
      .deleteReviewer(req.params.id)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {
    Reviewer
      .findById(req.params.id)
      .lean()
      .populate({ 
        path: 'reviews',
        select: {
          rating: true,
          review: true,
          film: true
        },
        populate: {
          path: 'film',
          select: { title: true }
        }
      })
      .then(reviewer => {
        reviewer.reviews.forEach(reviews => {
          delete reviews.reviewer;
        });
        res.send(reviewer);
      })
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Reviewer
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(reviewer => res.send(reviewer))
      .catch(next);
  });
