'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrazoProv extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PrazoProv.init({
    txtdata1: DataTypes.STRING,
    txtassunto1: DataTypes.STRING,
    txttaxa1: DataTypes.STRING,
    txtacesso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PrazoProv',
  });
  return PrazoProv;
};