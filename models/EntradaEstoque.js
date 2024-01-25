const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// criação da constante EntradaEstoque  , utilizando o define para definir o modelo e suas propriedades 
const EntradaEstoque = sequelize.define("entrada_estoque", {
    id_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: {
        type: DataTypes.INTEGER,

    },
    data_entrada: {
        type: DataTypes.DATE,

    },

}, {
    timestamps: false
})


module.exports = EntradaEstoque;
