'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadProf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CadProf.init({
    nomeProfessorCadastro: DataTypes.STRING,
    senhaProfessorCadastro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CadProf',
  });
  return CadProf;
};