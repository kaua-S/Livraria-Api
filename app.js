const express = require('express');
const app = express();
const db = require('./config/database');
const produtosRoute = require('./routes/produtosRoute');
const Produto = require('./models/Produto')


// Middlewares
app.use(express.json());


app.use(produtosRoute);

const PORT = process.env.PORT || 3000;

db.authenticate()
    .then(() => {
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
        console.log('Conexão com o banco de dados estabelecida com sucesso.')
    })
    .catch(err => console.error('Erro ao conectar com o banco de dados:', err));