
// Fazendo a requisições :

// Requisição do modelo EntradaEstoque
const EntradaEstoque = require("../models/EntradaEstoque");
// Requisição do modelo SaidaEstoque
const SaidaEstoque = require("../models/SaidaEstoque");
// Requisição do modelo requeste vindo do express 
const req = require("express/lib/request");
// Requisição do modelo requeste vindo do express 
const res = require("express/lib/response");

// Criando a constante EntradaController
const EntradaController = {

  //Criação do Produto
  createEntrada: async (req, res) => {
    try {
      //criando um novo produto a partir do corpo da requisição  , recebendo informações do produto vindas pelo json         
      const id_produto = req.params.id
      const { quantidade, data_entrada } = req.body
      const novaEntrada = await EntradaEstoque.create({
        quantidade,
        data_entrada,
        id_produto
      });
      res.json(novaEntrada);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllEntradas: async (req, res) => {
    try {
      //Buscando todos os produtos , recebendo uma lista deles vinda pela resposta do json 
      const Entrada = await EntradaEstoque.findAll();
      res.json(Entrada);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getEntradasById: async (req, res) => {
    try {
      //Buscando o produto por id , recebendo informações dele se bem sucedido
      const Entrada = await EntradaEstoque.findByPk(req.params.id);
      if (!Entrada) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Entrada no estoque não encontrado");
      }
      res.json(Entrada);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateEntrada: async (req, res) => {
    try {
      // Buscando o produto por id 
      const Entrada = await EntradaEstoque.findByPk(req.params.id);
      if (!Entrada) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Produto não encontrado");
      }
      //Fazendo o updtade pelo corpo da requisição , 
      // await = aviso para o codigo não continuar até a ação ser concluída  
      await Entrada.update(req.body);
      // enviado uma reposta utilizando o método send 
      res.send("Entrada no estoque atualizado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteEntranda: async (req, res) => {
    try {
      // Buscando o produto por id 
      const Entrada = await EntradaEstoque.findByPk(req.params.id);
      if (!Entrada) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Entrada no estoque não encontrado");
      }
      //Fazendo o delete do produto
      // await = aviso para o codigo não continuar até a ação ser concluída 
      await Entrada.destroy();
      // enviado uma reposta utilizando o método send 
      res.send("Entrada no estoque deletada com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = EntradaController;
