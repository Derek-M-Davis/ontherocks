const mongoose = require('mongoose');
const Drinks = require('../models/drinks.js')

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    savedDrinks: [Drinks.schema]
})

const User = mongoose.model('User', userSchema)

module.exports = User
