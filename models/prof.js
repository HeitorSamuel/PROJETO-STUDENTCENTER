// const { DataTypes } = require('sequelize');
// const { sequelizecadprof } = require('./db');

// const cadprof = sequelizecadprof.define('alunos', {
//     matricula: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         primaryKey: true
//     },
//     nome: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     salapc: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     timestamps: false
// });

// module.exports = cadprof;

const { DataTypes } = require('sequelize');
const { sequelizecadprof } = require('./db');

const CadProf = sequelizecadprof.define('table_prof', {
    nomeProfessorCadastro: {
        type: DataTypes.STRING,
        allowNull: false
  
    },
    senhaProfessorCadastro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    timestamps: false
});

module.exports = CadProf;
