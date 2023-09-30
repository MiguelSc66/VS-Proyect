const { DataTypes } = require("sequelize");
const db = require("../db");

export const Order = db.define("Order", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  userEmail: {
    type: DataTypes.STRING,
  },
  detail: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  tax: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
