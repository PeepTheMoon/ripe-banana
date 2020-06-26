const { Router } = require('express');
const Film = require('../models/Film');

module.exports = Router()
  .get('/', (req, res, next) => {
    Film
      .find()
      .then(film => res.send(film))
      .catch(next);
  })
  .get('/:_id', (req, res, next) => {
    Film
      .findOne({ _id: req.params._id })
      .then(film => res.send(film))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Film
      .create({ ...req.body })
      .then(film => res.send(film))
      .catch(next);
  });
