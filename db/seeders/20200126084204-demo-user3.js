const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Roma',
      password: await bcrypt.hash('123', 10),
      email: '11@mail.ru',
    },
    {
      name: 'Zori',
      password: await bcrypt.hash('123', 10),
      email: '22@mail.ru',

    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
