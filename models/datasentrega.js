'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DatasEntrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DatasEntrega.init({
    txtdata: DataTypes.STRING,
    txtassunto: DataTypes.STRING,
    txtnota: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DatasEntrega',
  });
  return DatasEntrega;
};