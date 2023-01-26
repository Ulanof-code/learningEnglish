'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Themes', [{
      title: 'Cities',
      userId: 1,
      background: 'https://img3.goodfon.ru/original/2560x1600/3/a7/building-city-wallpaper-913.jpg'
    }, {
      title: 'Meet',
      userId: 1,
      background: 'https://images.squarespace-cdn.com/content/v1/5ef1906345a9c44665dd7d1e/1593343886698-ICXBUKKWBSFEINJCTLC4/business-meeting-PAX3RVM.jpg',
    }, {
      title: 'Nature',
      userId: 1,
      background: 'https://wallpapercave.com/wp/wp10745039.jpg',
    }, {
      title: 'Books',
      userId: 1,
      background: 'https://miro.medium.com/max/1200/1*QIXFjzPwmru1S0tx4rixmg.jpeg',
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
