const{Model , DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { belongsTo } = require('./Produto');
const Produto = require('./Produto');

class EntradaEstoque extends Model{}

EntradaEstoque.init({
    id_Entrada:{
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

