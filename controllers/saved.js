const express = require('express');
const router = express.Router();
const Drinks = require('../models/drinks.js')
const User = require('../models/users.js')

router.patch('/', (req, res) => {
    User.findByIdAndUpdate(req.session.user._id,{$push: {savedDrinks:req.body}}, (err, foundUser) => {
        res.json(foundUser)
    })
})

module.exports = router;
