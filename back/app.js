const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body Parser config 
app.use(bodyParser.urlencoded({ extended: true }));  //force le parse dans les objet imbriqué
app.use(bodyParser.json());
// const helmet = require("helmet");

// //rajoute entete a l'objet response qu'on renvoi au navigateur - CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    console.log("header set");
    next();
});


// app.use(helmet());

// app.use('/images', express.static('resources'));

app.get('/gettest', (req, res) => {
  console.log("req body : ", req.body);
  
  res.send('Hello World!')
  // res.render('index');
})



app.post('/posttest', (req, res) => {
  console.log('GET request received', req.body);
  // res.header("Access-Control-Allow-Headers","*");
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
  // res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  res.send('Hello World!')
})

// //Route use
// app.use('/api/users', userRoutes);
// app.use('/api/posts', postRoutes);  


module.exports = app;