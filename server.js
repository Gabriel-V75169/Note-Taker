const express = require('express');
const app = express();
const api = require('./routes/index');
const html = require('./routes/html');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('./', html);

app.use('./api', api);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))