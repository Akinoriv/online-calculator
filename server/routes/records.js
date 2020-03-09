const express = require("express");
const router = express.Router();

var fs = require("fs");

//const { StringDecoder } = require("string_decoder");
//const decoder = new StringDecoder("utf8");

function jsonWrite(name, mJson) {
    fs.writeFile(name, mJson, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("complete");
    });
}

router.post("/", async(req, res) => {
    //  console.log("1")
    console.log(req.body)


    fs = require('fs');
    fs.writeFile("test.json", JSON.stringify(req.body, null, 2));
    res.header({
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json; text/plain; application/x-www-form-urlencoded; */*",
        //     "Access-Control-Allow-Origin": "http://192.168.0.199:8080",
        //     "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS, DELETE",
        //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token, Access-Control-Allow-Headers", "Accept": "text/plain; charset=utf-8",
        //     "Content-Type": "text/plain; charset=utf-8",
        //     "Accept": "application/json; charset=utf-8",
        //     "Content-Type": "application/json; charset=utf-8",
    });

    //res.json({ ok: true });
    res.json({ state: 'success' });
});
module.exports = router;