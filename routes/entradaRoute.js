const express = require("express");
const router = express.Router();
const EntradaController = require("../controllers/EntradaController");
const ProdutoController = require('../controllers/ProdutoController')

router.post("/entradas", EntradaController.createEntrada);

//Rota para obter todos os produtos
router.get("/entradas", EntradaController.getAllEntradas);

//Rota para obter um produto pelo ID
router.get("/entradas/:id", EntradaController.getEntradasById );

//Rota para atualizar um produto
router.put("/entradas/:id", EntradaController.updateEntrada);

//Rota para deletar um produto
router.delete("/entradas/:id", EntradaController.deleteEntranda);

module.exports = router;
