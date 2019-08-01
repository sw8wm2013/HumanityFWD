const db = require('../db/db.js');
const express = require('express');

const dbController = {};


dbController.registerUser = (req, res, next) =>{
    console.log(`This is my ${req.body}`)
    const {firstName, lastName, email, password} = req.body
    db.query('INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, password], (error, results) => {
        if (error) {
          throw error
        }
        res.status(201).send(`User added with ID: ${res.insertId}`)
      })
}


module.exports = dbController;
