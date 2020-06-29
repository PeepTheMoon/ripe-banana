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

  it('gets the 100 highest rated reviews with GET', async() => {
    return request(app)
      .get('/api/v1/reviews/')
      .then(res => {
        expect(res.body.length).toEqual(100);
        expect(res.body).toContainEqual({
          _id: expect.anything(),
          rating: expect.any(Number),
          review: expect.any(String),
          film: {
            _id: expect.anything(),
            title: expect.any(String)
          }
        });
      });
  });
});
