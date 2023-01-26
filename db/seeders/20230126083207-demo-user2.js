/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      engWord: 'City',
      rusWord: 'Город',
      themeId: 1,
    },
    {
      engWord: 'Government',
      rusWord: 'Правительство',
      themeId: 1,

    },
    {
      engWord: 'Gull',
      rusWord: 'Чайка',
      themeId: 2,

    },
    {
      engWord: 'Сarp',
      rusWord: 'Сазан',
      themeId: 2,

    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
