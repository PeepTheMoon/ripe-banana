const chance = require('chance').Chance();

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const Reviewer = require('../lib/models/Reviewer');
const Actor = require('../lib/models/Actor');
>>>>>>> 8063eb2bdbc1dc127257fabfffd004f844762516
=======
const Reviewer = require('../lib/models/Reviewer');
const Actor = require('../lib/models/Actor');
const Studio = require('../lib/models/Studio');
>>>>>>> 3a02eccf6c9f73742977badf6186b54741fa2e06

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
<<<<<<< HEAD
};

>>>>>>> 40edb74bf1e78cb3a74d5d403e574351e7760a56
=======
  await Studio.create([...Array(createdStudios)].map(() => ({
    name: `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`, 
    address: {
      city: chance.city(),
      state: chance.state(),
      country: chance.country()
    }
  })));
};
>>>>>>> 3a02eccf6c9f73742977badf6186b54741fa2e06
