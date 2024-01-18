const {Model , DataTypes} = require('sequelize');
const sequelize = require('../config/database');

class Produto extends Model {}

Produto.init({
    id_Produto:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome_produto:{
        type:DataTypes.STRING
    },
    descricao:{
        type:DataTypes.TEXT
    },
    preco_unitario:{
        type:DataTypes.DECIMAL  
    }

},{
    sequelize,
    modelName:'produto',
    timestamps:false
}
);

module.exports = Produto;