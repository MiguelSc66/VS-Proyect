require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/tu-basededatos`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file))(sequelize));
  });

// Agrega las asociaciones aquí, si las tienes
const { Users, Drink, Order } = sequelize.models;

Users.hasMany(Order, { as: "orders" });
Order.belongsTo(Users);
Users.hasMany(Drink, { as: "orders" });
Drink.belongsTo(Users, { as: "user" });


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
