const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const session = require('express-session');
// const SessionStore = require("connect-session-knex")(session);

const app = express();

// const store = new SessionStore({
//     knex,
//     tablename: "sessions",
// });


app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
// app.use(
//     session({
//         store: store,


// }))


//controllers
const {
    getAllItems,
    getOneItem,
    addItem,
    updateItem,
    deleteItem,
    getManagers,
    createUser, 
} = require('./db/controllers');
const { Password } = require('@mui/icons-material');




//GET Requests
app.get('/', (req, res) => res.send('Welcome to the Bowling Inventory!'))

app.get('/inventory', (req, res) => {
    getAllItems()
     .then(data =>  {
         res.send(data)
     })
     .catch((err) => {
         res.send(err);
     })   
 })

app.get('/inventory/:id', (req, res) => {
    getOneItem(req.params.id)
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

//PUT Requests
app.put('/inventory/:id', (req, res) => {
    updateItem(req.params.id, req.body)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.send(err);
    })
})

//DELETE Requests
app.delete('/inventory/:id', (req, res) => {
    deleteItem(req.params.id)
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.send(err);
    })
})

//Admin section
app.get('/managers', (req, res) => {
    getManagers()
     .then(data =>  {
         res.send(data)
     })
     .catch((err) => {
         res.send(err);
     })   
 })

 app.post('/managers', (req, res) => {
    if(req.body) {
        createUser(req.body)
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

module.exports = app;