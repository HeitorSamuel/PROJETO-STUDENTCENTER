const { DataTypes } = require('sequelize');
const { sequelizeInformes } = require('./db');

const DadosInformes = sequelizeInformes.define('tabela_informes', {
        txtprof: {
            type: DataTypes.STRING(100)
        },
        txtsobre: {
            type: DataTypes.STRING(500),
            primaryKey: true
        }
    }, {
        timestamps: false
    });
    
module.exports = DadosInformes;