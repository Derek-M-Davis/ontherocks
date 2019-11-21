const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

router.post('/', (req, res) => {
    User.create(req.body, (error, createdUser) => {
        res.json(createdUser)
    })
})


module.exports = router;
