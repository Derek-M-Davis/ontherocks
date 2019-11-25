const express = require('express');
const router = express.Router();
const Drinks = require('../models/drinks.js')
const User = require('../models/users.js')

// Create saved drinks route
router.patch('/', (req, res) => {
    User.findByIdAndUpdate(req.session.user._id,{$push: {savedDrinks:req.body}}, {new:true}, (err, foundUser) => {
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
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.session.user._id, {$pull: {savedDrinks: {_id: req.params.id}}}, {new:true}, (error, foundUser) => {
        User.findByIdAndUpdate(req.session.user._id, {$push: {savedDrinks: req.body}}, {new:true}, (error, foundUser) => {
            res.json(foundUser)
        })
    })
})


// Delete Route for users saved drinks
router.delete('/:id', (req,res) => {
    User.findByIdAndUpdate(req.session.user._id, {$pull: {savedDrinks: {_id: req.params.id}}}, {new:true}, (error, foundUser) => {
        res.json(foundUser)
    });
})


module.exports = router;
