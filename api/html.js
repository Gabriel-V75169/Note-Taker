const express = require('express').Router();
const notesRouter = require("..public/notes");

Router.get('/notes', (req, res) => {
    res.json(`${req.method} request received`);
});