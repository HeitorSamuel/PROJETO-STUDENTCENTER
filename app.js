const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const DatasEntrega = require('./models/DatasEnt');
const DadosPrazoProvas = require('./models/PrazoProv');
const DadosInformes = require('./models/informs');
const Cadprof = require("./models/prof.js");
const { sequelize, sequelizeDatasEntregas, sequelizePrazoProvas, sequelizeInformes, sequelizecadprof } = require('./models/db');
const User = require('./models/User');
// const sequelizeDatasEntregas = require('./models/db');
// const sequelizePrazoProvas = require('./models/db');
const bodyParser = require("body-parser");
const { where } = require('sequelize');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Servir arquivos estáticos do diretório "public"
// app.use(express.static(path.join(__dirname, "public")));


// Rotas para servir arquivos HTML específicos
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pagdeAcesso/index.html");
});

app.get("/pagdehome/homepage.html", (req, res) => {
    res.sendFile(__dirname + "/pagdehome/homepage.html");
});

app.get("/pagdedatasentrega/DatasEntrega.html", (req, res) => {
    res.sendFile(__dirname + "/pagdedatasentrega/DatasEntrega.html");
});

app.get("/pagdefuncionalidades/funcionalidades.html", (req, res) => {
    res.sendFile(__dirname + "/pagdehome/pagdefuncionalidades/funcionalidades.html");
});

app.get("/PagQuemSomos/quemsomos.html", (req, res) => {
    res.sendFile(__dirname + "/pagdehome/PagQuemSomos/quemsomos.html");
});

app.get("/pagdeinformes/informes.html", (req, res) => {
    res.sendFile(__dirname + "/pagdeinformes/informes.html");
});

app.get("/pagdeprapro/PrazosProvas.html", (req, res) => {
    res.sendFile(__dirname + "/pagdeprapro/PrazosProvas.html");
});

app.get("/pagdeupload/UploadAtividades.html", (req, res) => {
    res.sendFile(__dirname + "/pagdeupload/UploadAtividades.html");
});

app.get("/pagdecalendariogeral/calendarioGeral2.html", (req, res) => {
    res.sendFile(__dirname + "/pagdecalendariogeral/calendarioGeral2.html");
});

app.post("/processar", (req, res) => {
    User.create({
        matriculas: req.body.matriculas,
        nome: req.body.nome,
        email: req.body.email,
        salapc: req.body.salapc
    }).then(() => {
        res.redirect("/pagdehome/homepage.html");
    }).catch((erro1) => {
        res.send("Erro: Dados não foram cadastrados com sucesso! " + erro1);
    });
});

app.post("/cadastrar", async (req, res) => {
    console.log(req.body);
    await User.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário cadastrado com sucesso!"
            });
        }).catch((err) => {
            console.error("Erro ao cadastrar usuário: ", err); // Log do erro no console
            return res.status(400).json({
                erro: true,
                mensagem: "ERRO: Usuário não cadastrado com sucesso!"
            });
        });
});

sequelize.sync({ force: false })
    .then(() => {
        console.log("Modelos sincronizados com o banco de dados 'sistemadecadastro'");
    })
    .catch(err => {
        console.error("Erro ao sincronizar modelos com o banco de dados 'sistemadecadastro':", err);
});

app.post('/loginAluno', async (req, res) => {
    const { matriculal, salapl } = req.body;

    try {
        const aluno = await User.findOne({
            where: {
                matriculas: matriculal,
                salapc: salapl
            }
        });

        if (aluno) {
            res.redirect('/pagdehome/homepage.html');
        } else {
            res.status(401).json({ message: "Matrícula ou sala inválida" });
        }
    } catch (err) {
        console.error("Erro ao tentar logar aluno:", err);
        res.status(500).json({ message: "Erro ao tentar logar aluno" });
    }
});

app.post("/processar1", (req, res) => {
        Cadprof.create({
            nomeProfessorCadastro: req.body.nomeProfessorCadastro,
            senhaProfessorCadastro: req.body.senhaProfessorCadastro
        }).then(() => {
            res.redirect("/pagdehome/homepage.html");
        }).catch((erro2) => {
            res.send("Erro: Dados não foram cadastrados com sucesso! " + erro2);
        });
});

app.post("/cadastrarprof", async (req, res) => {
    console.log(req.body);
    await Cadprof.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Professor cadastrado com sucesso!"
            });
        }).catch((err) => {
            console.error("Erro ao cadastrar professor: ", err); // Log do erro no console
            return res.status(400).json({
                erro: true,
                mensagem: "ERRO: Professor não cadastrado com sucesso!"
            });
        });
});
sequelizecadprof.sync({ force: false })
    .then(() => {
        console.log("Modelos sincronizados com o banco de dados 'cadastroprof'");
    })
    .catch(err => {
        console.error("Erro ao sincronizar modelos com o banco de dados 'cadastroprof':", err);
});

app.post('/loginProfessor', async (req, res) => {
        const { nomeProfessorLogin, senhaProfessorLogin } = req.body;
    
        try {
            const professor = await Cadprof.findOne({
                where: {
                    nomeProfessorCadastro: nomeProfessorLogin,
                    senhaProfessorCadastro: senhaProfessorLogin
                }
            });
    
            if (professor) {
                res.redirect('/pagdehome/homepage.html');
            } else {
                res.status(401).json({ message: "Nome ou senha inválidos" });
            }
        } catch (err) {
            console.error("Erro ao tentar logar professor:", err);
            res.status(500).json({ message: "Erro ao tentar logar professor" });
        }
});
    

app.get("/datasentregas", async (req, res) => {
        try {
            const dados = await DatasEntrega.findAll();
            res.json(dados);
        } catch (err) {
            res.status(500).json({ error: "Erro ao buscar dados" });
        }
});
    
app.post("/datasentregas", async (req, res) => {
        try {
            const { txtdata, txtassunto, txtnota } = req.body;
            const novoDado = await DatasEntrega.create({ txtdata, txtassunto, txtnota });
            res.json(novoDado);
        } catch (err) {
            res.status(400).json({ error: "Erro ao adicionar dados" });
        }
});
    
app.put("/datasentregas/:txtassunto", async (req, res) => {
        try {
            const { txtassunto } = req.params;
            const { txtdata, txtnota } = req.body;
    
            const dado = await DatasEntrega.findByPk(txtassunto);
            if (dado) {
                dado.txtdata = txtdata;
                dado.txtnota = txtnota;
                await dado.save();
                res.json({ message: "Registro atualizado com sucesso." });
            } else {
                res.status(404).json({ error: "Registro não encontrado." });
            }
        } catch (err) {
            res.status(400).json({ error: "Erro ao atualizar dados." });
        }
});
    
app.delete("/datasentregas/:txtassunto", async (req, res) => {
        try {
            const { txtassunto } = req.params;
            const result = await DatasEntrega.destroy({ where: { txtassunto } });
            if (result) {
                res.json({ message: "Registro deletado com sucesso." });
            } else {
                res.status(404).json({ error: "Registro não encontrado." });
            }
        } catch (err) {
            res.status(400).json({ error: "Erro ao deletar dados." });
        }
});

sequelizeDatasEntregas.sync({ force: false })
    .then(() => {
        console.log("Modelos sincronizados com o banco de dados 'dados_datasentregas'");
    })
    .catch(err => {
        console.error("Erro ao sincronizar modelos com o banco de dados 'dados_datasentregas':", err);
    });

    
app.get("/PrazoProvas", async (req, res) => {
        try {
            const dados2 = await DadosPrazoProvas.findAll();
            res.json(dados2);
        } catch (err) {
            res.status(500).json({ error: "Erro ao buscar dados" });
        }
});
    
app.post("/PrazoProvas", async (req, res) => {
        try {
            const { txtdata1, txtassunto1, txttaxa1, txtacesso } = req.body;
            const novoDado2 = await DadosPrazoProvas.create({ txtdata1, txtassunto1, txttaxa1, txtacesso });
            res.json(novoDado2);
        } catch (err) {
            res.status(400).json({ error: "Erro ao adicionar dados" });
        }
});
    
app.put("/PrazoProvas/:txtassunto1", async (req, res) => {
        try {
            const { txtassunto1 } = req.params;
            const { txtdata1, txttaxa1, txtacesso } = req.body;
    
            const dado2 = await DadosPrazoProvas.findByPk(txtassunto1);
            if (dado2) {
                dado2.txtdata1 = txtdata1;
                dado2.txttaxa1 = txttaxa1;
                dado2.txtacesso = txtacesso;
                await dado2.save();
                res.json({ message: "Registro atualizado com sucesso." });
            } else {
                res.status(404).json({ error: "Registro não encontrado." });
            }
        } catch (err) {
            res.status(400).json({ error: "Erro ao atualizar dados." });
        }
});
    
app.delete("/PrazoProvas/:txtassunto1", async (req, res) => {
        try {
            const { txtassunto1 } = req.params;
            const resultad = await DadosPrazoProvas.destroy({ where: { txtassunto1 } });
            if (resultad) {
                res.json({ message: "Registro deletado com sucesso." });
            } else {
                res.status(404).json({ error: "Registro não encontrado." });
            }
        } catch (err) {
            res.status(400).json({ error: "Erro ao deletar dados." });
        }
});

sequelizePrazoProvas.sync({ force: false })
    .then(() => {
        console.log("Modelos sincronizados com o banco de dados 'prazoprovas'");
    })
    .catch(err => {
        console.error("Erro ao sincronizar modelos com o banco de dados 'prazoprovas':", err);
});

app.get("/Informes", async (req, res) => {
    try {
        const dados3 = await DadosInformes.findAll();
        res.json(dados3);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar dados" });
    }
});

app.post("/Informes", async (req, res) => {
    try {
        const { txtprof, txtsobre } = req.body;
        const novoDado3 = await DadosInformes.create({ txtprof, txtsobre });
        res.json(novoDado3);
    } catch (err) {
        res.status(400).json({ error: "Erro ao adicionar dados" });
    }
});

app.put("/Informes/:txtsobre", async (req, res) => {
    try {
        const { txtsobre } = req.params;
        const { txtprof } = req.body;
        const dado3 = await DadosInformes.findByPk(txtsobre);
        if (dado3) {
            dado3.txtprof = txtprof;
            await dado3.save();
            res.json({ message: "Registro atualizado com sucesso." });
        } else {
            res.status(404).json({ error: "Registro não encontrado." });
        }
    } catch (err) {
        res.status(400).json({ error: "Erro ao atualizar dados." });
    }
});

app.delete("/Informes/:txtsobre", async (req, res) => {
    try {
        const { txtsobre } = req.params;
        const resultads = await DadosInformes.destroy({ where: { txtsobre } });
        if (resultads) {
            res.json({ message: "Registro deletado com sucesso." });
        } else {
            res.status(404).json({ error: "Registro não encontrado." });
        }
    } catch (err) {
        res.status(400).json({ error: "Erro ao deletar dados." });
    }
});

sequelizeInformes.sync({ force: false })
.then(() => {
    console.log("Modelos sincronizados com o banco de dados 'informes'");
})
.catch(err => {
    console.error("Erro ao sincronizar modelos com o banco de dados 'informes'", err);
});

app.listen(5500, () => {
        console.log("Servidor iniciado na porta 5500: http://localhost:5500");
});