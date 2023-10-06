const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('CartItem', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    image: {
      type: DataTypes.STRING,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};