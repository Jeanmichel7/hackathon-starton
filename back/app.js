require('dotenv').config()
console.log(process.env.API_KEY)


const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const prodRoutes = require('./routes/products');
app.use('', prodRoutes);




app.post('/posttest', (req, res) => {
  res.json({ message: 'Hello World!' });
  // res.send('Hello World!')
  // res.post('hello');
})

module.exports = app;