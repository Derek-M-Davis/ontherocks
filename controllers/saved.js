const express = require('express');
const router = express.Router();
const Drinks = require('../models/drinks.js')
const User = require('../models/users.js')

router.patch('/', (req, res) => {
    User.findOne(req.session.user.username,{$push: {saved:req.body}}, (err, foundUser) => {
        res.json(foundUser)
    })
})

module.exports = router;
