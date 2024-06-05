// const Sequelize = require('sequelize');
// const db = require('./db');

// const User = db.define('alunos', {
//     matricula: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         primaryKey: true
//     },
//     nome: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     }
// }, {
//     timestamps: false // Desativa as colunas createdAt e updatedAt
// });

// module.exports = User;

// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./db');

// const User = sequelize.define('alunos', {
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

// module.exports = User;
const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const User = sequelize.define('alunos', {
    matriculas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
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

