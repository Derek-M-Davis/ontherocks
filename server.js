// ============== Dependencies ================== //
const express  = require('express');
const mongoose = require('mongoose');
const app      = express()
const session  = require('express-session')
const db       = mongoose.connection
const bcrypt   = require('bcrypt')
const PORT     = process.env.PORT || 3000;

require('dotenv').config()

// ============== Database ================== //
const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true });

// ============== Middleware ================== //
// use public folder for static assets
app.use(express.static('public'))
// Returns middleware associated with Json
app.use(express.json())
// Session encoder
app.use(session({
    secret:'feedmeseymour',
    resave:false,
    saveUninitialized:false
}))

// ============== Controllers ================== //
const drinksController = require('./controllers/drinks.js')
app.use('/', drinksController)

const usersController = require('./controllers/users.js')
app.use('/', usersController)

const sessionController = require('./controllers/session.js')
app.use('/session', sessionController)

// ============= Error/Server Status =============== /
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'))

// ==================== Listner ===================== /
app.listen(PORT, () => {
    console.log('Sipping on port: ' + PORT)
})

