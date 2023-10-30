const app = require('express').Router();
const { Router } = require('express');
const { v4: uuidv4 } = require('uuid');
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

app.get('/', (req, res) => {
    readFromFile('.db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/', (req, res) => {
    const {title, text} = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4,
        };
        readAndAppend(newNote, './db/db.json');
        const response = {
            status: 'success',
            body: newNote,
        };
        
        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

app.delete('/:id', (req, res) => {
    const newId = req.params.id;
    
})

module.exports = app;