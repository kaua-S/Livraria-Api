const express = require('express');
const app = express();

const db = require('./config/database');


db.authenticate()
.then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
.catch(err => console.error('Erro ao conectar com o banco de dados:',err));



