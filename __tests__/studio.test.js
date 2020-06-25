require('dotenv').config();
const { prepare } = require('../database/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
const Studio = require('../lib/models/Studio');
require('../lib/models/Studio');

require('../lib/models/Studio');

describe('studio routes', () => {
  it('creates a studio', () => {
    return request(app)
      .post('/api/v1/studios')
      .send({
        name: 'Doc Studios',
        address: {
          city: 'Chicago',
          state: 'IL',
          country: 'USA'
        }
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.anything(),
          name: 'Doc Studios',
          address: {
            _id: expect.anything(),
            city: 'Chicago',
            state: 'IL',
            country: 'USA'
          },
          __v: 0 
        });
      });
  });

  it('GET studio id and name', async() => {
    const studios = prepare(await Studio.find().select({ name: true }));

    return request(app)
      .get('/api/v1/studios')
      .then(res => {
        expect(res.body).toEqual(studios);
      });


  });

  // it('GET studio by id', async() => {
  //   const studio = prepare(await Studio.findOne()).populate('films.film');
  //   return request(app)
  //     .get(`/api/v1/studios/${studio._id}`)
  //     .the(res => {
  //       expect(res.body).toEqual(studio);
  //     });
  // });

});
