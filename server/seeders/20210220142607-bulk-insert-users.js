const { hash } = require('bcrypt');
const CONSTANTS = require('./../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'buyerf',
      lastName: 'buyerl',
      displayName: 'buyerdn',
      password: await hash('123456', CONSTANTS.SALT_ROUNDS),
      email: 'qwertyb@qwerty.qwerty',
      avatar: 'anon.png',
      role: 'customer',
      balance: 100000,
    }, {
      firstName: 'creativef',
      lastName: 'creativel',
      displayName: 'creativedn',
      password: await hash('123456', CONSTANTS.SALT_ROUNDS),
      email: 'qwertyc@qwerty.qwerty',
      avatar: 'anon.png',
      role: 'creator',
      balance: 100,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {
      email: {
        [Sequelize.Op.in]:['qwertyb@qwerty.qwerty', 'qwertyc@qwerty.qwerty'],
      },
    }, {});
  },
};
