const express = require('express');
const router = express.Router();

router.get('/resources', (req, res) => {
    db.any('SELECT * FROM library')
    .then( data => {
        res.json(data);
    })
    .catch( error => {
        res.json({error: error.message});
    });
});

module.exports = router;