const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const User = require('../models/users.js');

// Create/Post Route
router.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser) => {
        req.session.user = createdUser
        res.json(createdUser)
    })
})

// Read/Index Route
router.get('/', (req, res) => {
    User.find({}, (error, allUsers) => {
        res.json(allUsers)
    })
})

// Update/Edit Route
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedUser) => {
        res.json(updatedUser)
    })
})

// Delete Route
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (error, deletedUser) => {
        res.json(deletedUser)
    })
})

// Route to look up individual user
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (error, foundUser) => {
        res.json(foundUser)
    })
})

module.exports = router;
