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
      engWord: 'Square',
      rusWord: 'Площадь',
      themeId: 1,

    },
    {
      engWord: 'Garden',
      rusWord: 'Сад',
      themeId: 1,

    },
    {
      engWord: 'Yard',
      rusWord: 'Двор',
      themeId: 1,

    },
    {
      engWord: 'Fencing',
      rusWord: 'Ограждение',
      themeId: 1,

    },
    {
      engWord: 'Tiger',
      rusWord: 'Тигр',
      themeId: 2,

    },
    {
      engWord: 'Hippo',
      rusWord: 'Бегемот',
      themeId: 2,

    },
    {
      engWord: 'Lynx',
      rusWord: 'Рысь',
      themeId: 2,

    },
    {
      engWord: 'Horse',
      rusWord: 'Конь',
      themeId: 2,

    },
    {
      engWord: 'Peacock',
      rusWord: 'Павлин',
      themeId: 2,

    },
    {
      engWord: 'Cow',
      rusWord: 'Корова',
      themeId: 2,

    },
    {
      engWord: 'Сucumber',
      rusWord: 'Огурец',
      themeId: 3,

    },
    {
      engWord: 'Eggplant',
      rusWord: 'Баклажан',
      themeId: 3,

    },
    {
      engWord: 'Shrimp',
      rusWord: 'Креветка',
      themeId: 3,

    },
    {
      engWord: 'Cheese',
      rusWord: 'Сыр',
      themeId: 3,

    },
    {
      engWord: 'Sausage',
      rusWord: 'Колбаса',
      themeId: 3,

    },
    {
      engWord: 'Borsch',
      rusWord: 'Борщ',
      themeId: 3,

    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
