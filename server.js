const express = require('express');
const bodyParser = require('body-parser');
const db = require('./backend/db');
const api = require('./backend/routes/api');

const app = express();

app.use('/api', api);
app.use(bodyParser.json());



app.get('/', function(req, res) {
    res.send('Hello World');
});



app.get('/resources', (req, res) => {
    db.any('SELECT * FROM library')
    .then( data => {
        res.json(data);
    })
    .catch( error => {
        res.json({error: error.message});
    });
});

app.listen(8080,function() {
    console.log('Listening on port 8080');
});