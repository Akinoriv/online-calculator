const express = require('express');
const router = express.Router();

var fs = require('fs');

function jsonWrite(name, mJson) {
    fs.writeFile(name, mJson, function(err) {
        if (err) {
            console.log(err);
        }
        console.log('complete');
    });
}

router.post('/', async(req, res) => {
    console.log(req.body)
    jsonWrite("test.json", JSON.stringify(req.body));
    res.json({ state: 'success' });
});

module.exports = router;