/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Roma',
      password: '123',
      email: '1@mail.ru',
    },
    {
      name: 'Zori',
      password: '123',
      email: '2@mail.ru',

    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
