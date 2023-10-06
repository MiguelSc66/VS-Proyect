const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Order', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
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
};