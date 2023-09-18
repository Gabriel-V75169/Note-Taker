const express = require('express').Router();

Router.get('/notes', (req, res) => {
    res.json(`${req.method} request received`);
});

module.exports = express;