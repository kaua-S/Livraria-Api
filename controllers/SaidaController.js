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
const SaidaController = {
  
  //Criação do Produto
  createSaida: async (req, res) => {
    try {
      //criando um novo produto a partir do corpo da requisição  , recebendo informações do produto vindas pelo json         
      const novaSaida = await SaidaEstoque.create(req.body);
      res.json(novaEntrada);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllSaidas: async (req, res) => {
    try {
      //Buscando todos os produtos , recebendo uma lista deles vinda pela resposta do json 
      const Saida = await SaidaEstoque.findAll();
      res.json(Saida);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getSaidaById: async (req, res) => {
    try {
      //Buscando o produto por id , recebendo informações dele se bem sucedido
      const Saida = await  SaidaEstoque.findByPk(req.params.id);
      if (!Saida) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Entrada no estoque não encontrado");
      }
      res.json(Saida);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateSaida: async (req, res) => {
    try {
        // Buscando o produto por id 
      const Saida = await SaidaEstoque.findByPk(req.params.id);
      if (!Saida) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Produto não encontrado");
      }
      //Fazendo o updtade pelo corpo da requisição , 
      // await = aviso para o codigo não continuar até a ação ser concluída  
      await SaidaEstoque.update(req.body);
       // enviado uma reposta utilizando o método send 
      res.send("Entrada no estoque atualizado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteSaida: async (req, res) => {
    try {
     // Buscando o produto por id 
      const Saida = await SaidaEstoque.findByPk(req.params.id);
      if (!Saida) {
          //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Entrada no estoque não encontrado");
      }
      //Fazendo o delete do produto
      // await = aviso para o codigo não continuar até a ação ser concluída 
      await SaidaEstoque.destroy();
      // enviado uma reposta utilizando o método send 
      res.send("Entrada no estoque deletada com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = SaidaController;