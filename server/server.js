const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

app.get('/expressbackend', (req, res) =>{
  res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT!'})
});

app.listen(3000);