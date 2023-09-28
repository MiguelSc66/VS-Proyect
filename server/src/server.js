const express = require('express');
const cors = require('cors');
const fs = require('fs');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

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

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
