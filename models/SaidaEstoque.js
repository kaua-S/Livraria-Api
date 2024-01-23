const{Model , DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { belongsTo } = require('./Produto');
const Produto = require('./Produto');

const  SaidaEstoque = sequelize.define("saida_estoque",{
    id_Saida:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    quantidade:{
        type:DataTypes.INTEGER
    },
    data_saida:{
    type:DataTypes.DATE
    }
}, {
    timestamps: false
})

module.exports = SaidaEstoque


