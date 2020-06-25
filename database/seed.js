const chance = require('chance').Chance();

const Studio = require('../lib/models/Studio');

module.exports = async({ createdStudios = 10 } = {}) => {
  await Studio.create([...Array(createdStudios)].map(() => ({
    name: `${chance.capitalize(chance.word)} ${chance.capitalize(chance.word)}`, 
    address: {
      city: chance.city(),
      state: chance.state(),
      country: chance.country()
    }
  })));
};
