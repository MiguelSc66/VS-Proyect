require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY
} = process.env;


// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//     logging: false, 
//     native: false, 
// });
const sequelize = new Sequelize(`${DB_DEPLOY}`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, '/models', file));
    modelDefiners.push(modelDefiner);
  });

modelDefiners.forEach((modelDefiner) => {
  modelDefiner(sequelize);
  console.log(`Model loaded: ${modelDefiner.name}`);
});

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Order, Drink,  } = sequelize.models;

// Define las asociaciones entre modelos
User.hasMany(Order, { foreignKey: "id" }); // Aquí especificamos la clave foránea userId
Order.belongsTo(User, { foreignKey: "id" }); // Aquí también especificamos la clave foránea userId
User.belongsToMany(Drink, { through: "UserDrink" }); // Usamos una tabla intermedia "UserDrink"
Drink.belongsToMany(User, { through: "UserDrink" }); // Usamos la misma tabla intermedia "UserDrink"


console.log('Associations defined.');

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
