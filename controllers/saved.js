const express = require('express');
const router = express.Router();
const Drinks = require('../models/drinks.js')
const User = require('../models/users.js')

// Create saved drinks route
router.patch('/', (req, res) => {
    User.findByIdAndUpdate(req.session.user._id,{$push: {savedDrinks:req.body}}, {new:true}, (err, foundUser) => {
        console.log(foundUser);
        console.log(req.session.user);
        req.session.user = foundUser;
        res.json(foundUser)
    })
})

// Index of saved drinks route
router.get('/', (req, res) => {
    User.findById(req.session.user._id, (error, foundUser) => {
        res.json(foundUser)
    })
})

// Edit Route for notes into users saved drinks array



// Delete Route for users saved drinks



module.exports = router;
