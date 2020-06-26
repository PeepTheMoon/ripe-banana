const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

module.exports = Router()
  .get('/', (req, res, next) => {
    Reviewer
      .find()
      .then(reviewers => res.send(reviewers))
      .catch(next);
  })


  // to be used once we have an id route 
  .delete('/:id', (req, res, next) => {
    Reviewer
      .deleteReviewer(req.params.id)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  });
  
