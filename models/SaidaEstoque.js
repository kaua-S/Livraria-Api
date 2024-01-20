const{Model , DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { belongsTo } = require('./Produto');
const Produto = require('./Produto');

class SaidaEstoque extends Model{}

SaidaEstoque.init({
    id_Saida:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    quantidade:{
        type:DataTypes.INTEGER
    },
    data_entrada:{
    type:DataTypes.DATE
    }
}).sync()

EntradaEstoque.belongsTo(Produto);