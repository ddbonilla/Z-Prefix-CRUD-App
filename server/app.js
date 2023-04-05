const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

//controllers
const {
    getAllItems,
 
} = require('./db/controllers');

//GET Requests
app.get('/', (req, res) => res.send('Welcome to SpareWars Bowling Inventory!'))

app.get('/inventory', (req, res) => {
    getAllItems()
     .then(data =>  {
         res.send(data)
     })
     .catch((err) => {
         res.send(err);
     })   
 })

//POST Requests
//PATCH/PUT Requests
//DELETE Requests

module.exports = app;