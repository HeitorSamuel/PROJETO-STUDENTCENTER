
const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const User = sequelize.define('alunos', {
        matriculas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salapc: {
          type: DataTypes.STRING,
          allowNull: false
      }
    }, {
        timestamps: false
    });
    
module.exports = User;