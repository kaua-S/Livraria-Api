const { Sequelize } = require('sequelize');

const dbName = 'Livraria';
const dbUser = 'root';
const dbPassorword = '';
const dbHost = "localhost";

const sequelize = new Sequelize(dbName, dbUser, dbPassorword, {
  host: dbHost,
  dialect: 'mysql'
});

module.exports = sequelize;
