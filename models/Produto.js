const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// criação da classe filha Produto , extendida do objeto Model
class Produto extends Model {}

Produto.init(
  // Fazendo a atribuição da classe produto
  {
    id_Produto: {
      // Definindo o tipo do dado como integer
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_produto: {
      // Definindo o tipo do dado como String (Varchar - SQL)
      type: DataTypes.STRING,
    },
    descricao: {
      // Definindo o tipo do dado como text
      type: DataTypes.TEXT,
    },
    preco_unitario: {
      // Definindo o tipo do dado como Decimal
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    // específica o nome da tabela 
    modelName: "produto",
    // desativamento da criação do carimbo de tempo 
    timestamps: false,
  }

  //Instruindo o sequelize a criar a tabela Produto dentro do Banco SQL
).sync();

module.exports = Produto;
