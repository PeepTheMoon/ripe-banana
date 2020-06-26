require('dotenv').config();
require('../database/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
const Reviewer = require('../lib/models/Reviewer');
const Film = require('../lib/models/Film');
const Review = require('../lib/models/Review');

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

  it('gets a reviewer by id with GET', async() => {
    const reviewer = await Reviewer.findOne();

    return request(app)
      .get(`/api/v1/reviewers/${reviewer.id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: reviewer.id,
          name: reviewer.name,
          __v: 0,
          company: reviewer.company,
          reviews: expect.arrayContaining(
            [
              expect.objectContaining(
                {
                  _id: expect.anything(),
                  rating: expect.any(Number),
                  review: expect.any(String),
                  film: {
                    _id: expect.anything(),
                    title: expect.any(String)
                  }
                })
            ])
        });
      });
  });

  // it('DELETE a review with no reviews', async() => {
  //   return request(app)
  //     .post('/api/v1/reviewers')
  //     .send({
  //       name: 'Doc Studios',
  //       company: 'that one film company'
  //     })
  //     .then(reviewer => {
  //       return request(app)
  //         .delete(`/api/v1/reviewers/${reviewer.body._id}`);
  //     })
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         _id: expect.anything(),
  //         name: 'Doc Studios',
  //         company: 'that one film company',
  //         __v: 0
  //       });
  //     });
  // });
});
