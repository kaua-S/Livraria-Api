const { Sequelize } = require("sequelize");

const dbName = "Livraria";
const dbUser = "Admin";
const dbPassorword = "1234";
const dbHost = "localhost";

const sequelize = new Sequelize(dbName, dbUser, dbPassorword, {
  host: dbHost,
  dialect: "mysql",
});

exports.sequelize = sequelize;
