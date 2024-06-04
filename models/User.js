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
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [7, 7] // Matrícula deve ter exatamente 7 caracteres
        }
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 40] // Nome deve ter entre 1 e 40 caracteres
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true // Deve ser um email válido
        }
    },
    salapc: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = User;

