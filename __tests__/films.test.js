const { prepare } = require('../database/data-helpers');
const request = require('supertest');
const app = require('../lib/app');
const chance = require('chance').Chance();
const Film = require('../lib/models/Film');
const Studio = require('../lib/models/Studio');
const Actor = require('../lib/models/Actor');

describe('Film routes', () => {
  it('GETs all films', async() => {
    const films = prepare(await Film.find());

    return request(app)
      .get('/api/v1/films')
      .then(res => {
        expect(res.body).toEqual(films);
      });
  });
  it('GETs a specific film by ID', async() => {
    const film = prepare(await Film.findOne());

    return request(app)
      .get(`/api/v1/films/${film._id}`)
      .then(res => {
        expect(res.body).toEqual(film);
      });
  });
  it('POSTs a new film', async() => {
    const studios = await Studio.find();
    const actors = await Actor.find();

    const newFilm = {
      title: chance.string(),
      released: chance.date(),
      studio: chance.pickone(studios),
      cast: [{
        role: chance.profession(),
        actor: chance.pickone(actors)
      }, {
        role: chance.profession(),
        actor: chance.pickone(actors)
      }]
    };

    return request(app)
      .post('/api/v1/films')
      .send(newFilm)
      .then(res => {
        expect(res.body.title).toEqual(newFilm.title);
        expect(res.body.cast[0].actor._id).toEqual(newFilm.cast[0]._id);
      });
  });
});
