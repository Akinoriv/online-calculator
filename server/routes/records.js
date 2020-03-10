const express = require("express");
const router = express.Router();

var fs = require("fs");

//const { StringDecoder } = require("string_decoder");
//const decoder = new StringDecoder("utf8");

router.post("/", async(req, res) => {
    //  console.log("1")
    console.log(req.body)

    fs.writeFile("test.json", JSON.stringify(req.body, null, 2), () => {
        res.header({
            "Content-Type": "application/x-www-form-urlencoded",
        });

        res.json({ state: 'success' });
    });
});
module.exports = router;
