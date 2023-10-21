const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Review', {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });  
};

