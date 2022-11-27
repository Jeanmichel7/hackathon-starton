require('dotenv').config()
// console.log(process.env.API_KEY)

const cors = require('cors');
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const prodRoutes = require('./routes/products');
app.use('', prodRoutes);

module.exports = app;