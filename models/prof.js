const { DataTypes } = require('sequelize');
const { sequelizecadprof } = require('./db');

const CadProf = sequelizecadprof.define('table_profs', {
    nomeProfessorCadastro: {
        type: DataTypes.STRING,
        allowNull: false
  
    },
    senhaProfessorCadastro: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = CadProf;
