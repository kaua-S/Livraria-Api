// Fazendo a requisições :

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
      const id_produto = req.params.id
      const { quantidade, data_saida } = req.body
      const novaSaida = await SaidaEstoque.create({
        quantidade,
        data_saida,
        id_produto
      });
      res.json(novaSaida);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getAllSaidas: async (req, res) => {
    try {
      //Buscando todos os produtos , recebendo uma lista deles vinda pela resposta do json 
      const saida = await SaidaEstoque.findAll();
      res.json(saida);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  getSaidaById: async (req, res) => {
    try {
      //Buscando o produto por id , recebendo informações dele se bem sucedido
      const saida = await SaidaEstoque.findByPk(req.params.id);
      if (!saida) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Entrada no estoque não encontrado");
      }
      res.json(saida);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateSaida: async (req, res) => {
    try {
      // Buscando o produto por id 
      const saida = await SaidaEstoque.findByPk(req.params.id);
      if (!saida) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Produto não encontrado");
      }
      //Fazendo o updtade pelo corpo da requisição , 
      // await = aviso para o codigo não continuar até a ação ser concluída  
      await saida.update(req.body);
      // enviado uma reposta utilizando o método send 
      res.send("Entrada no estoque atualizado com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteSaida: async (req, res) => {
    try {
      // Buscando o produto por id 
      const saida = await SaidaEstoque.findByPk(req.params.id);
      if (!saida) {
        //Se o id não for encontrado recebera essa mensagem 
        return res.status(404).send("Entrada no estoque não encontrado");
      }
      //Fazendo o delete do produto
      // await = aviso para o codigo não continuar até a ação ser concluída 
      await saida.destroy();
      // enviado uma reposta utilizando o método send 
      res.send("Entrada no estoque deletada com sucesso");
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = SaidaController;
