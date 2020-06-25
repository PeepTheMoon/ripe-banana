const chance = require('chance').Chance();

<<<<<<< HEAD
const Studio = require('../lib/models/Studio');

module.exports = async({ createdStudios = 10 } = {}) => {
  await Studio.create([...Array(createdStudios)].map(() => ({
    name: `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`, 
    address: {
      city: chance.city(),
      state: chance.state(),
      country: chance.country()
    }
  })));
};
=======
const Reviewer = require('../lib/models/Reviewer');

module.exports = async({ reviewers = 5 } = {}) => {
  await Reviewer.create([...Array(reviewers)].map(() => ({
    name: chance.name(),
    company: chance.company()
  })));
};

>>>>>>> 40edb74bf1e78cb3a74d5d403e574351e7760a56
