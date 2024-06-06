'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Informes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Informes.init({
    txtprof: DataTypes.STRING,
    txtsobre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Informes',
  });
  return Informes;
};