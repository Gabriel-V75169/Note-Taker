const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {readFromFile, readAndAppend} = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    console.info(`${req.method} request recieved for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    const {title, text} = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
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

module.exports = notes;