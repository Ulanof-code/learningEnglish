'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Cards', [{
      engWord: 'Street',
      rusWord: 'Улица',
      themeId: 1,
      learned: false
    }, {
      engWord: 'Home',
      rusWord: 'Дом',
      themeId: 1,
      learned: false
    }, {
      engWord: 'eqqw',
      rusWord: 'фсвйы',
      themeId: 1,
      learned: false
    }, {
      engWord: 'qxq',
      rusWord: 'чйй',
      themeId: 1,
      learned: false
    }, {
      engWord: 'qsqw',
      rusWord: '2йцычый',
      themeId: 2,
      learned: false
    }, {
      engWord: 'cweqw',
      rusWord: 'cqчйц',
      themeId: 2,
      learned: false
    }, {
      engWord: 'qwr',
      rusWord: 'ртнкеа',
      themeId: 2,
      learned: false
    }, {
      engWord: 'opp',
      rusWord: 'усццй',
      themeId: 2,
      learned: false
    }, {
      engWord: 'алcdw',
      rusWord: 'дбцдцу',
      themeId: 3,
      learned: false
    }, {
      engWord: 'pwem,cew',
      rusWord: 'лцулс',
      themeId: 3,
      learned: false
    }, {
      engWord: 'kwekcm',
      rusWord: 'лсц ',
      themeId: 3,
      learned: false
    }, {
      engWord: 'kcj',
      rusWord: 'луосолц',
      themeId: 3,
      learned: false
    }, {
      engWord: 'kjckjw',
      rusWord: 'цосвол',
      themeId: 4,
      learned: false
    }, {
      engWord: 'kjcjkw',
      rusWord: 'лдцус ьдл',
      themeId: 4,
      learned: false
    }, {
      engWord: 'klcl',
      rusWord: 'лдслд',
      themeId: 4,
      learned: false
    }, {
      engWord: ' дnc',
      rusWord: 'wkу лсд',
      themeId: 4,
      learned: false
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
