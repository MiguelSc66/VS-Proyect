const express = require('express');
const cors = require('cors');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 5000;
const app = express();
const {router} = require('./routes/index');
const decodeToken = require("./Middlewares/AuthGoogle")
const authenticateJWT = require("./Middlewares/authMiddleware")


// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(router); 
app.use(decodeToken);
app.use(authenticateJWT)


// Ruta para obtener los datos de tragos desde drinks.json
app.get('/api/drinks', (req, res) => {
  try {
    const drinksData = JSON.parse(fs.readFileSync('./data/drinks.json', 'utf8'));
    res.json(drinksData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudieron obtener los datos de tragos.' });
  }
});

// Manejo de errores
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(status).send(message);
});



module.exports = app
