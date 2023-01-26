/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Города',
      background: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3b/FC_Spartak_Moscow_Logotype.svg/1200px-FC_Spartak_Moscow_Logotype.svg.png',
      userId: 1,
    },
    {
      title: 'Птицы',
      background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/FC_Zenit_1_star_2015_logo.svg/1200px-FC_Zenit_1_star_2015_logo.svg.png',
      userId: 2,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
