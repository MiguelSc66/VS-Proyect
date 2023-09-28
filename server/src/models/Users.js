const { DataTypes } = require("sequelize");
const db = require("../db"); // Asegúrate de importar tu instancia de Sequelize
const Drink = require("./Drink"); // Importa el modelo de Drink

const User = db.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Definir la relación entre User y Drink
User.hasMany(Drink, { as: "orders" });

module.exports = User;