

// // const Sequelize = require('sequelize');

// // const sequelize = new Sequelize('sistemadecadastro', 'root', 'nossa321', {
// //     host: 'localhost',
// //     dialect: 'mysql'
// // });



// // sequelize.authenticate()
// // .then(() => {
// //     console.log("Conexão com o banco de dados realizada com sucesso!");
// // }).catch((err) => {
// //     console.error("ERRO: Conexão com o banco de dados não realizada com sucesso!", err); // Log do erro no console
// // });

// // module.exports = sequelize;

// const Sequelize = require('sequelize');


// // Configuração para o banco de dados 'sistemadecadastro'
// const sequelize = new Sequelize('sistemadecadastro', 'root', 'nossa321', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// sequelize.authenticate()
//     .then(() => {
//         console.log("Conexão com o banco de dados 'sistemadecadastro' realizada com sucesso!");
//     })
//     .catch((err) => {
//         console.error("ERRO: Conexão com o banco de dados 'sistemadecadastro' não realizada com sucesso!", err);
//     });

// const sequelizeDatasEntregas = new Sequelize('dados_datasentregas', 'root', 'nossa321', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
    
// sequelizeDatasEntregas.authenticate()
// .then(() => {
//     console.log("Conexão com o banco de dados realizada com sucesso!");
// }).catch((err) => {
//         console.error("ERRO: Conexão com o banco de dados não realizada com sucesso!", err);
//     });

// const sequelizePrazoProvas = new Sequelize('prazoprovas', 'root', 'nossa321', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
    
// sequelizePrazoProvas.authenticate()
//         .then(() => {
//             console.log("Conexão com o banco de dados 'prazoprovas' realizada com sucesso!");
//         })
//         .catch((err) => {
//             console.error("ERRO: Conexão com o banco de dados 'prazoprovas' não realizada com sucesso!", err);
//         });
    
    
    
// module.exports = sequelize;
// module.exports = sequelizeDatasEntregas;
// module.exports = sequelizePrazoProvas;

const Sequelize = require('sequelize');

// Configuração para o banco de dados 'sistemadecadastro'
const sequelize = new Sequelize('sistemadecadastro', 'root', 'nossa321', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados 'sistemadecadastro' realizada com sucesso!");
    })
    .catch((err) => {
        console.error("ERRO: Conexão com o banco de dados 'sistemadecadastro' não realizada com sucesso!", err);
    });

// Configuração para o banco de dados 'dados_datasentregas'
const sequelizeDatasEntregas = new Sequelize('dados_datasentregas', 'root', 'nossa321', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelizeDatasEntregas.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados 'dados_datasentregas' realizada com sucesso!");
    })
    .catch((err) => {
        console.error("ERRO: Conexão com o banco de dados 'dados_datasentregas' não realizada com sucesso!", err);
    });

// Configuração para o banco de dados 'prazoprovas'
const sequelizePrazoProvas = new Sequelize('prazoprovas', 'root', 'nossa321', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelizePrazoProvas.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados 'prazoprovas' realizada com sucesso!");
    })
    .catch((err) => {
        console.error("ERRO: Conexão com o banco de dados 'prazoprovas' não realizada com sucesso!", err);
});

const sequelizeInformes = new Sequelize('informes', 'root', 'nossa321', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelizeInformes.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados 'informes' realizada com sucesso!");
})
.catch((err) => {
    console.error("ERRO: Conexão com o banco de dados 'informes' não realizada com sucesso!", err);
});

const sequelizecadprof = new Sequelize('cadastroprof', 'root', 'nossa321', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelizecadprof.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados 'informes' realizada com sucesso!");
})
.catch((err) => {
    console.error("ERRO: Conexão com o banco de dados 'informes' não realizada com sucesso!", err);
});

// Exportar cada conexão individualmente
module.exports = {
    sequelize,
    sequelizeDatasEntregas,
    sequelizePrazoProvas,
    sequelizeInformes,
    sequelizecadprof
};