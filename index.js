const express = require('express');
const mongoose = require('mongoose');

// iniciando o app
const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// rotas
app.get('/', (req, res) => {
  res.send('Ola victor!')
});

// abrindo porta
app.listen(3001);