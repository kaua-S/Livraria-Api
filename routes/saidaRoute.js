const express = require("express");
const router = express.Router();
const EntradaController = require("../controllers/EntradaController");
const ProdutoController = require('../controllers/ProdutoController');
const SaidaController = require('../controllers/SaidaController');

router.post("/saidas", SaidaController.createSaida);

//Rota para obter todos os produtos
router.get("/entradas", SaidaController.getAllSaidas);

//Rota para obter um produto pelo ID
router.get("/entradas/:id", SaidaController.getSaidaById );

//Rota para atualizar um produto
router.put("/entradas/:id", SaidaController.updateSaida);

//Rota para deletar um produto
router.delete("/entradas/:id", SaidaController.deleteSaida);

module.exports = router;
