<h1 align="center">   📚Api sobre Livraria</h1>

<p align="center">
 <a href="#-Sobre"> Tecnologia </a>   |    <a href="#-Projeto"> Projeto </a>   |   <a href="#-Motivação"> Motivação </a>   |   <a href="#-Funcionamento"> Funcionamento </a> 
</p>
  
 <h2 align="center"> <img src="https://cdn-icons-png.flaticon.com/512/3064/3064889.png" width="25" padding="0"> Tecnologias</h2>
<ul>
 <li><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" > </li>
  <li><img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" > </li>
   <li><img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" > </li>
  <li><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" > </li>
   <li><img src="https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white" > </li>
 <li><img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" > </li>
</ul>


<h2 align="center"> <img src="https://cdn-icons-png.flaticon.com/512/1317/1317626.png" width="25" padding="0"> Projeto</h2>
<p >No programa de preparação Entra21 , na matéria de Node foi designado
    o trabalho de se fabricar uma API 100% funcional, dessa forma , foi desenvolvido uma API que realiza a criação , 
    busca , atualização e deletagem das entidades Produto , Entrada Estoque e Saida Estoque. Tal entidades estão ligadas a linguagem de banco SQL , que tem sua intregação com a  Api através do ORM Sequelize que produz a conexão entre o SQL e o codigo. </p>


<h2 align="center"><img src="https://cdn-icons-png.flaticon.com/512/7224/7224338.png" width="25" padding="0"> Motivação</h2>
<p> Atribui minha motivação a desenvolver esse projeto por meio de uma experiencia vivida , pois me encontrei em frustração com um sebo de livros, que não possui tecnologia adequada para o atendimento agilizado   </p>

<h2 align="center"><img src="https://cdn-icons-png.flaticon.com/512/4370/4370707.png" width="25" padding="0"> Funcionamento</h2>
<p>Parte 1 : Conexão com o banco de dados :


```javascript
// Fazendo a requisição do modulo Sequelize<br>
const { Sequelize } = require("sequelize");

// Fazendo a armagenagem das configurações do banco de dados
const dbName = "livraria";
const dbUser = "root";
const dbPassorword = "";
const dbHost = "localhost";

// Criando uma instancia da classe Sequelize
const sequelize = new Sequelize(dbName, dbUser, dbPassorword, {
  //Configurando o host e dialeto(banco que sera utilizado)
  host: dbHost,
  dialect: "mysql",
});

module.exports = sequelize;</b>
```

 Como visto na imagem a conexão é feita por meio do sequelize que é uma OR que conecta o codigo com o banco de dados <br><br>

 Parte2: Criando uma das 3 entidades , sendo a escolhida Produtos

 ```javascript
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const EntradaEstoque = require('./EntradaEstoque');
const SaidaEstoque = require('./SaidaEstoque');


// criação da constante Produto , utilizando o define para definir o modelo e suas propriedades 
const Produto = sequelize.define("produto", {
    id_produto: {
        // Definindo o tipo do dado como integer
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_produto: {
        // Definindo o tipo do dado como String (Varchar - SQL)
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        // Definindo o tipo do dado como text (text - SQL)
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco_unitario: {
        // Definindo o tipo do dado como Decimal (Decimal - SQL)
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    timestamps: false
});
```

 Parte3: Criando o controle de uma das entidades geradas 

```javascript
 
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

```

Parte 4 : criando as rotas que o modelo Produto ira utilizar 

´´´javascript
const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController");

//Rota para criar um novo produto
router.post("/produtos", ProdutoController.createProduto);

//Rota para obter todos os produtos
router.get("/produtos", ProdutoController.getAllProdutos);

//Rota para obter um produto pelo ID
router.get("/produtos/:id", ProdutoController.getProdutoById);

//Rota para atualizar um produto
router.put("/produtos/:id", ProdutoController.updateProduto);

//Rota para deletar um produto
router.delete("/produtos/:id", ProdutoController.deleteProduto);

module.exports = router;
´´´

 </p>
