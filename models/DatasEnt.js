// const Sequelize = require('sequelize');
// const data = require('./db');

// const DatasEntrega = data.define('datasentregas', {
//     txtdata: {
//         type: Sequelize.DATE,
//         allowNull: false
//     },
//     txtassunto: {
//         type: Sequelize.STRING(300),
//         allowNull: false,
//         primaryKey: true
//     },
//     txtnota: {
//         type: Sequelize.FLOAT,
//         allowNull: false
//     }
// }, {
//     timestamps: false
// });

// module.exports = DatasEntrega;

const { DataTypes } = require('sequelize');
const { sequelizeDatasEntregas } = require('./db');

const DatasEntrega = sequelizeDatasEntregas.define('datasentregas', {
        txtdata: {
            type: DataTypes.DATE,
            allowNull: false
        },
        txtassunto: {
            type: DataTypes.STRING(300),
            allowNull: false,
            primaryKey: true
        },
        txtnota: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    
module.exports = DatasEntrega;
    