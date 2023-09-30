const { DataTypes } = require("sequelize");
const db = require("../db"); // Asegúrate de importar tu instancia de Sequelize
const Drink = require("./Drink"); // Importa el modelo de Drink

const User = db.define("User", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  Admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isDeleted: { // borrado lógico
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Definir la relación entre User y Drink
User.hasMany(Drink, { as: "orders" });

module.exports = User;