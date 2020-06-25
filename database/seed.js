const chance = require('chance').Chance();

const Reviewer = require('../lib/models/Reviewer');
const Actor = require('../lib/models/Actor');

module.exports = async({ reviewers = 5, actors = 5 } = {}) => {
  await Reviewer.create([...Array(reviewers)].map(() => ({
    name: chance.name(),
    company: chance.company()
  })));
  await Actor.create([...Array(actors)].map(() => ({
    name: chance.name(),
    dob: chance.date(),
    pob: chance.city()
  })));
};

