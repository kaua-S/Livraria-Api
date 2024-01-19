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


//Utilizando o metodo create para inserir valores dentro do banco SQL

Produto.create(
    {
        nome_produto:"Dom Quixote",
        descricao:"Livro infanto-juvenil",
        preco_unitario:127   
    }
   
)

Produto.create(
    {
        nome_produto:"JS AVANÇADO",
        descricao:"Livro tecnicó",
        preco_unitario:137   
    }
)

Produto.create(
    {
        nome_produto:"Paz Guerreira",
        descricao:"Livro de Fantasia",
        preco_unitario:67   
    }
)

Produto.create(
    {
        nome_produto:"Cidade dos fantasmas",
        descricao:"Livro de Fantasia , 1 da trilogia",
        preco_unitario:49   
    }
)

Produto.create(
    {
        nome_produto:"O hobbit",
        descricao:"Livro de Fantasia , vem com pôster",
        preco_unitario:79   
    }
)

Produto.create(
    {
        nome_produto:"Star Wars",
        descricao:"Livro de Fantasia ",
        preco_unitario:49   
    }
)

Produto.create(
    {
        nome_produto:"Os Heróis do Olimpo",
        descricao:"Box com 5 livros",
        preco_unitario:189   
    }
)
Produto.create(
    {
        nome_produto:"Sherlock Holmes",
        descricao:"livro de investigação",
        preco_unitario:89   
    }
)
Produto.create(
    {
        nome_produto:"Mar sem estrelas",
        descricao:"livro de fantasia , ficção",
        preco_unitario:99   
    }
)
Produto.create(
    {
        nome_produto:"forwads",
        descricao:"livro de ficção",
        preco_unitario:89   
    }
)


