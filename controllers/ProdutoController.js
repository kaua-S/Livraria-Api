
// Fazendo a requisições :

// Requisição do modelo Produto
const Produto = require("../models/Produto");
// Requisição do modelo EntradaEstoque
const EntradaEstoque = require("../models/EntradaEstoque");
// Requisição do modelo SaidaEstoque
const SaidaEstoque = require("../models/SaidaEstoque");
// Requisição do modelo requeste vindo do express 
const req = require("express/lib/request");
// Requisição do modelo requeste vindo do express 
const res = require("express/lib/response");

// Criando a constante ProdutoController
const ProdutoController = {

  //Criação do Produto
  createProduto: async (req, res) => {
    try {
      //criando um novo produto a partir do corpo da requisição  , recebendo informações do produto vindas pelo json         
      const novoProduto = await Produto.create(req.body);
      res.json(novoProduto);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllProdutos: async (req, res) => {
    try {
      //Buscando todos os produtos , recebendo uma lista deles vinda pela resposta do json 
      const produtos = await Produto.findAll();
      res.json(produtos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getProdutoById: async (req, res) => {
    try {
      //Buscando o produto por id , recebendo informações dele se bem sucedido
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Produto não encontrado");
      }
      res.json(produto);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateProduto: async (req, res) => {
    try {
      // Buscando o produto por id 
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Produto não encontrado");
      }
      //Fazendo o updtade pelo corpo da requisição , 
      // await = aviso para o codigo não continuar até a ação ser concluída  
      await produto.update(req.body);
      // enviado uma reposta utilizando o método send 
      res.send("Produto atualizado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteProduto: async (req, res) => {
    try {
      // Buscando o produto por id 
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Produto não encontrado");
      }
      //Fazendo o delete do produto
      // await = aviso para o codigo não continuar até a ação ser concluída 
      await produto.destroy();
      // enviado uma reposta utilizando o método send 
      res.send("Produto deletado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = ProdutoController;
