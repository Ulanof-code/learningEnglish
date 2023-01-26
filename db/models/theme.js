'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Card}) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Card, { foreignKey: 'themeId' });
    }
  }
  Theme.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    background: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};