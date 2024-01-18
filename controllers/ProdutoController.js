const Produto = require('../models/Produto');
const EntradaEstoque = require('../models/EntradaEstoque');
const SaidaEstoque = require('../models/SaidaEstoque');
const req = require('express/lib/request');
const res = require('express/lib/response');

const ProdutoController = {
    createProduto: async(req,res) =>{
        try{
            const novoProduto = await Produto.create(req.body);
            res.json(novoProduto);
        }catch(error){
            res.status(500).send(error.message);
        }
    },

    getAllProdutos: async (req, res) => {
        try {
            const produtos = await Produto.findAll();
            res.json(produtos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
}