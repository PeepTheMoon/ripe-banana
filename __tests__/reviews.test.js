require('dotenv').config();

const { prepare } = require('../database/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
const Review = require('../lib/models/Review');
const Reviewer = require('../lib/models/Reviewer');
const Film = require('../lib/models/Film');

describe('reviews routes', () => {
  it('adds a new review with POST', async() => {
    const film = await Film.findOne();
    const reviewer = await Reviewer.findOne();

    return request(app)
      .post('/api/v1/reviews')
      .send({
        film: film._id,
        reviewer: reviewer._id,
        rating: 5,
        review: 'Best dracula film of the year!'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          film: film.id,
          reviewer: reviewer.id,
          rating: 5,
          review: 'Best dracula film of the year!',
          __v: 0
        });
      });
  });

  it('deletes a review with DELETE', async() => {
    const review = prepare(await Review.findOne());

    return request(app)
      .delete(`/api/v1/reviews/${review._id}`)
      .then(res => {
        expect(res.body).toEqual(review);
      });
  });

});
