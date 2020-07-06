const { Router } = require('express');
const Actor = require('../models/Actor');

module.exports = Router()
  .get('/', (req, res, next) => {
    Actor
      .find()
      .then(actors => res.send(actors))
      .catch(next);
  })
  .get('/:_id', (req, res, next) => {
    Actor
      .findOne({ _id: req.params._id })
      .then(actor => res.send(actor))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Actor
      .create({ ...req.body })
      .then(actor => res.send(actor))
      .catch(next);
  });
