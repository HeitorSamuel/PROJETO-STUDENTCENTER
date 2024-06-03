// const Sequelize = require('sequelize');
// const prova = require('./db');

// const DadosPrazoProvas = prova.define('prazo_provas', {
//     txtdata1: {
//         type: Sequelize.DATE
//     },
//     txtassunto1: {
//         type: Sequelize.STRING(300),
//         primaryKey: true
//     },
//     txttaxa1: {
//         type: Sequelize.STRING(45)
//     },
//     txtacesso: {
//         type: Sequelize.STRING(500)
//     }
// }, {
//     timestamps: false
// });

// module.exports = DadosPrazoProvas;

const { DataTypes } = require('sequelize');
const { sequelizePrazoProvas } = require('./db');

const DadosPrazoProvas = sequelizePrazoProvas.define('prazo_provas', {
        txtdata1: {
            type: DataTypes.DATE
        },
        txtassunto1: {
            type: DataTypes.STRING(300),
            primaryKey: true
        },
        txttaxa1: {
            type: DataTypes.STRING(45)
        },
        txtacesso: {
            type: DataTypes.STRING(500)
        }
    }, {
        timestamps: false
    });
    
module.exports = DadosPrazoProvas;