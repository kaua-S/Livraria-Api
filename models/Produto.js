const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const EntradaEstoque = require('./EntradaEstoque');
const SaidaEstoque = require('./SaidaEstoque');


// criação da constante Produto , utilizando o define para definir o modelo e suas propriedades 
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
        // Definindo o tipo do dado como text (text - SQL)
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco_unitario: {
        // Definindo o tipo do dado como Decimal (Decimal - SQL)
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    timestamps: false
});

Produto.hasMany(EntradaEstoque, { foreignKey: { name: 'id_produto' } })
Produto.hasMany(SaidaEstoque, { foreignKey: { name: 'id_produto' } })

Produto.create({
    "nome_produto":"biblioteca",
    "descricao":"livro infanto juvenil",
    "preco_unitario":78
})

Produto.create({
    "nome_produto":"Mapa Mundi",
    "descricao":"livro sobre geografia",
    "preco_unitario":108
})

Produto.create({
    "nome_produto":"Dom quixote",
    "descricao":"livro infanto juvenil",
    "preco_unitario":118
})

Produto.create({
    "nome_produto":"JavaScript Enciclopedia",
    "descricao":"livro tecnico",
    "preco_unitario":129
})

Produto.create({
    "nome_produto":"Node Enciclopedia",
    "descricao":"livro tecnico",
    "preco_unitario":139
})

Produto.create({
    "nome_produto":"Html Enciclopedia",
    "descricao":"livro tecnico",
    "preco_unitario":149
})

Produto.create({
    "nome_produto":"Saas Enciclopedia",
    "descricao":"livro tecnico",
    "preco_unitario":169
})

Produto.create({
    "nome_produto":"Typescript Enciclopedia",
    "descricao":"livro tecnico",
    "preco_unitario":179
})

Produto.create({
    "nome_produto":"Geografia Enciclopedia",
    "descricao":"livro tecnico",
    "preco_unitario":189
})

Produto.create({
    "nome_produto":"Programação Enciclopedia",
    "descricao":"livro tecnico",
    "preco_unitario":199
})

module.exports = Produto;