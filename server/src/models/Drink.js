const { DataTypes } = require("sequelize");
const db = require("../db"); // Asegúrate de importar tu instancia de Sequelize
const User = require("./User"); // Importa el modelo de User

const Drink = db.define("Drink", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }, 
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true, 
  },
});

// Definir la relación inversa entre Drink y User
Drink.belongsTo(User, { as: "user" });

module.exports = Drink;
