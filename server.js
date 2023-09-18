const express = require('express').Router();
const api = require('./routes/index');
const html = require('./routes/html');
const PORT = process.env.PORT || 3001;

Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

Router.use(express.static('public'));
Router.use('./', html);

Router.use('./api', api);