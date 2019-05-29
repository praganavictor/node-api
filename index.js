const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

// const Product = mongoose.model('product');

// rotas
app.use('/api', require("./src/routes"));

// abrindo porta
app.listen(3001);