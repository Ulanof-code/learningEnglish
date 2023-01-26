/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Themes', [{
      title: 'Городская среда',
      background: 'https://retina.news.mail.ru/pic/69/79/main47654741_719356a75212db2cfa4b2777b993d6ad.jpeg',
      userId: 1,
    },
    {
      title: 'Животные',
      background: 'https://a3.cdn.japantravel.com/photo/68504-228665/738x545.92966002345!/%D1%80%D0%B5%D0%B4%D0%BA%D0%B8%D0%B5-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5-%D0%B2-%D0%B7%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA%D0%B0%D1%85-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8-228665.jpg',
      userId: 1,
    },
    {
      title: 'Еда',
      background: 'http://c.files.bbci.co.uk/9017/production/_105278863_gettyimages-855098134.jpg',
      userId: 1,
    },
    {
      title: 'Профессии',
      background: 'https://miridei.com/files/img/c/sucess-ideas/business-ideas/01.jpg',
      userId: 2,
    },
    {
      title: 'Одежда',
      background: 'https://ae04.alicdn.com/kf/S11db67c331bb46c6998893ae4b01c6aed/2022.jpg',
      userId: 2,
    },
    {
      title: 'Образование',
      background: 'https://www.norma.uz/img/d6/36/5ee0302576449250344b2d00ac25.jpg',
      userId: 2,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
