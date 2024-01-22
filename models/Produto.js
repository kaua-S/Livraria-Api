const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const EntradaEstoque = require('./EntradaEstoque');
const SaidaEstoque = require('./SaidaEstoque');


// criação da classe filha Produto , extendida do objeto Model
const Produto = sequelize.define("produto", {
    id_produto: {
        // Definindo o tipo do dado como integer
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_produto: {
        // Definindo o tipo do dado como String (Varchar - SQL)
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        // Definindo o tipo do dado como text
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco_unitario: {
        // Definindo o tipo do dado como Decimal
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    timestamps: false
});

Produto.hasMany(EntradaEstoque, { foreignKey: { name: 'id_produto' } })
Produto.hasMany(SaidaEstoque, { foreignKey: { name: 'id_produto' } })


module.exports = Produto;