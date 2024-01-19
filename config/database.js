// Fazendo a requisição do modulo Sequelize
const { Sequelize } = require("sequelize");

// Fazendo a armagenagem das configurações do banco de dados
const dbName = "Livraria";
const dbUser = "root";
const dbPassorword = "";
const dbHost = "localhost";

// Criando uma instancia da classe Sequelize
const sequelize = new Sequelize(dbName, dbUser, dbPassorword, {
  //Configurando o host e dialeto(banco que sera utilizado)
  host: dbHost,
  dialect: "mysql",
});

module.exports = sequelize;
