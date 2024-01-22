const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SaidaEstoque = sequelize.define("saida_estoque", {
    id_saida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: {
        type: DataTypes.INTEGER,
      
    },
    data_saida: {
        type: DataTypes.DATE,
      
    }
}, {
    timestamps: false
})


module.exports = SaidaEstoque;