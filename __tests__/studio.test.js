// const { prepare } = require('../database/data-helpers');
require('dotenv').config();
require('../database/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

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

});
