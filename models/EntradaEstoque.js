const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EntradaEstoque = sequelize.define("entrada_estoque", {
    id_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_entrada: {
        type: DataTypes.DATE,
        allowNull: false
    },
    
}, {
    timestamps: false
})


module.exports = EntradaEstoque;
