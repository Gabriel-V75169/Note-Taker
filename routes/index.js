const express = require('express');

const notesRouter = require("./notesRoute");

const app = express();

app.use('/note', notesRouter);

module.exports = app;