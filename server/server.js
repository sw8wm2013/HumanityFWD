const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const dbController = require('../client/Routers/dbcontroller.js');
//const starWarsController = require('../controllers/starWarsController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

app.get('/expressbackend', (req, res) =>{
  res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT!'})
});

app.post('/api/submit-registration', dbController.registerUser, (req, res, next) => {
  res.send(200)
})


//post route to catch submitted info and send to controller that will then make a DB query to store in DB
app.listen(3000);