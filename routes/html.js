const Router = require('express').Router();
const path = require('path');

Router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});


module.exports = Router;