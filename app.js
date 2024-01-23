
// Requisições:

//Fazendo a requisição do express
const express = require('express');

//criando uma nova instancia do express , através da função express() que serve como um constructor 
const app = express();

// Requisitando as configurações do database
const db = require('./config/database');

// Requisitando as rotas do produto 
const produtosRoute = require('./routes/produtosRoute');

// Requisitando as rotas do Estoque 
const entradasRoute = require('./routes/entradaRoute');

// Requisitando o modelo produto 
const Produto = require('./models/Produto')

// Requisitando o modelo EntradaEstoque 
const EntradaEstoque = require('./models/EntradaEstoque')
const SaidaEstoque = require('./models/SaidaEstoque')


Produto.sync();
EntradaEstoque.sync();
SaidaEstoque.sync();
// Middlewares
app.use(express.json());

// Utilizando as rotas 
app.use(produtosRoute);
app.use(entradasRoute);


const PORT = process.env.PORT || 3000;

// Usando o metódo authenticate para esperar a resposta do servidor 
db.authenticate()
    .then(() => {

        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
        console.log('Conexão com o banco de dados estabelecida com sucesso.')
    })
    .catch(err => console.error('Erro ao conectar com o banco de dados:', err));