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
    getOneItem,
    addItem,
    getAllManagers,
    deleteItem,
 
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

app.get('/inventory/:item', (req, res) => {
    getOneItem(req.params.item)
     .then(data =>  {
         res.send(data)
     })
     .catch((err) => {
         res.send(err);
     })   
 })

app.get('/managers', (req, res) => {
    getAllManagers()
     .then(data =>  {
         res.send(data)
     })
     .catch((err) => {
         res.send(err);
     })   
 })

//POST Requests
app.post('/inventory', (req, res) => {
    if(req.body) {
        addItem(req.body)
        .then(data =>  {
            res.send(data)
        })
        .catch((err) => {
            res.send(err);
        })   
    } else {
     res.status(400).send('invalid request');
    }
 })

//PATCH/PUT Requests
//DELETE Requests
app.delete('/inventory/:id', (req, res) => {
    deleteItem(req.params.id)
    .then(() => {
        res.send('item deleted')
    })
    .catch((err) => {
        res.send(err);
    })
})

module.exports = app;