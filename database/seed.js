const chance = require('chance').Chance();
const Reviewer = require('../lib/models/Reviewer');
const Actor = require('../lib/models/Actor');
const Studio = require('../lib/models/Studio');


module.exports = async({ reviewers = 5, actors = 5, createdStudios = 10 } = {}) => {

  await Reviewer.create([...Array(reviewers)].map(() => ({
    name: chance.name(),
    company: chance.company()
  })));

  await Actor.create([...Array(actors)].map(() => ({
    name: chance.name(),
    dob: chance.date(),
    pob: chance.city()
  })));

  await Studio.create([...Array(createdStudios)].map(() => ({
    name: `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`, 
    address: {
      city: chance.city(),
      state: chance.state(),
      country: chance.country()
    }
  })));
};
