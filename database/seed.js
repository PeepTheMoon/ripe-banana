const chance = require('chance').Chance();

const Reviewer = require('../lib/models/Reviewer');

module.exports = async({ reviewers = 5 } = {}) => {
  await Reviewer.create([...Array(reviewers)].map(() => ({
    name: chance.name(),
    company: chance.company()
  })));
};

