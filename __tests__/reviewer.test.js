require('dotenv').config();
require('../database/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
const Reviewer = require('../lib/models/Reviewer');

describe('reviewer routes', () => {
  it('gets reviewers with GET', async() => {
    const reviewers = await Reviewer.find();

    const expected = reviewers.map(reviewer => ({
      _id: reviewer.id,
      name: reviewer.name,
      company: reviewer.company,
      __v: 0
    }));

    return request(app)
      .get('/api/v1/reviewers')
      .then(res => {
        expect(res.body).toEqual(expected);
      });
  });

  // to be tested once the routes have get by id route
  it('DELETE a review with no reviews', async() => {
    return request(app)
      .post('/api/v1/reviewers')
      .send({
        name: 'Doc Studios',
        company: 'that one film company'
      })
      .then(reviewer => {
        return request(app)
          .delete(`/api/v1/reviewers/${reviewer.body._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'Doc Studios',
          company: 'that one film company',
          __v: 0
        });
      });
  });
});
