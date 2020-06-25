const { prepare } = require('../database/data-helpers');
const request = require('supertest');
const app = require('../lib/app');
const chance = require('chance').Chance();
const Actor = require('../lib/models/Actor');

describe('Actor routes', () => {
  it('GETs all actors', async() => {
    const actors = await Actor.find();

    return request(app)
      .get('/api/v1/actors')
      .then(res => {
        expect(res.body.length).toEqual(actors.length);
      });
  });
  it('GETs a specific actor by ID', async() => {
    const actor = prepare(await Actor.findOne());

    return request(app)
      .get(`/api/v1/actors/${actor._id}`)
      .then(res => {
        expect(res.body).toEqual(actor);
      });
  });
  it('POSTs a new actor', async() => {
    const newActor = {
      name: chance.name(),
      dob: chance.date(),
      pob: chance.city()
    };

    return request(app)
      .post('/api/v1/actors')
      .send(newActor)
      .then(res => {
        expect(res.body.name).toEqual(newActor.name);
        expect(res.body.pob).toEqual(newActor.pob);
      });
  });
});
