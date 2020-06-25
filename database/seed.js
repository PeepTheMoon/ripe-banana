const chance = require('chance').Chance();

const Studio = require('../lib/models/Studio');
const Reviewer = require('../lib/models/Reviewer');

module.exports = async({ reviewers = 5, createdStudios = 10 } = {}) => {
  await Reviewer.create([...Array(reviewers)].map(() => ({
    name: chance.name(),
    company: chance.company()
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
