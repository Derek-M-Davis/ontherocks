const express = require('express');
const mongoose = require('mongoose');
const app = express()
const db = mongoose.connection

const PORT = process.env.PORT || 3000;

require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI);
// MiddleWare
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true });

app.use(express.static('public'))

app.use(express.json())

// Controllers
// const drinksController = require('./controllers/drinks.js')
// app.use('/', drinksController)

const usersController = require('./controllers/users.js')
app.use('/', usersController)

// Error/Server Status
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'))

// Listener
app.listen(PORT, () => {
    console.log('Sipping on port: ' + PORT)
})

