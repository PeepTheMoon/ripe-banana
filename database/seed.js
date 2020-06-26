const chance = require('chance').Chance();
const Reviewer = require('../lib/models/Reviewer');
const Actor = require('../lib/models/Actor');
const Studio = require('../lib/models/Studio');
const Film = require('../lib/models/Film');
const Review = require('../lib/models/Review');

module.exports = async({ reviewers = 5, actors = 5, createdStudios = 10, createdFilms = 10, reviews = 15 } = {}) => {
  const allReviewers = await Reviewer.create([...Array(reviewers)].map(() => ({
    name: chance.name(),
    company: chance.company()
  })));

  const allActors = await Actor.create([...Array(actors)].map(() => ({
    name: chance.name(),
    dob: chance.date(),
    pob: chance.city()
  })));
  const allStudios = await Studio.create([...Array(createdStudios)].map(() => ({
    name: `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`, 
    address: {
      city: chance.city(),
      state: chance.state(),
      country: chance.country()
    }
  })));

  const allFilms = await Film.create([...Array(createdFilms)].map(() => ({
    title: `${chance.capitalize(chance.string())}`,
    studio: chance.pickone(allStudios)._id,
    released: chance.year(),
    cast: [{
      role: `${chance.pickone([chance.animal(), chance.profession()])}`,
      actor: chance.pickone(allActors)._id
    }]
  })));

  await Review.create([...Array(reviews)].map(() => ({
    rating: chance.natural({ min: 1, max: 5 }),
    reviewer: chance.pickone(allReviewers)._id,
    review: chance.sentence({ words: 10 }),
    film: chance.pickone(allFilms)._id
  })));
};
