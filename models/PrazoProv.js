const { DataTypes } = require('sequelize');
const { sequelizePrazoProvas } = require('./db');

const DadosPrazoProvas = sequelizePrazoProvas.define('prazo_provas', {
        txtdata1: {
            type: DataTypes.DATE,
            allowNull: false
        },
        txtassunto1: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        txttaxa1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        txtacesso: {
          type: DataTypes.STRING,
          allowNull: false
      }
    }, {
        timestamps: false
    });
    
module.exports = DadosPrazoProvas;