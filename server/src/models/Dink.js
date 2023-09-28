const { DataTypes } = require("sequelize");
const db = require("../db"); // Asegúrate de importar tu instancia de Sequelize
const User = require("./User"); // Importa el modelo de User

const Drink = db.define("Drink", {
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
  }
});

// Definir la relación inversa entre Drink y User
Drink.belongsTo(User, { as: "user" });

module.exports = Drink;
