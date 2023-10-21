const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('CartItem', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
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
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // Indica que no quieres que se generen campos relacionados UserId y DrinkId
    timestamps: false,
  });
};