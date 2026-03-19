const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3300;

mongoose
  .connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Error de conexion a MongoDB:', err));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

require('./apps/routes')(app);

app.listen(PORT, () => {
  console.log(`Servidor en ejecucion: http://localhost:${PORT}`);
});