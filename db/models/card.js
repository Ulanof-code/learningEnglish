const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  Card.init({
    engWord: DataTypes.STRING,
    rusWord: DataTypes.STRING,
    themeId: DataTypes.INTEGER,
    learned: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
