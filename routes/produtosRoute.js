const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.post('/produtos',ProdutoController.createProduto);

router.get('/produtos', ProdutoController.getAllProdutos);


