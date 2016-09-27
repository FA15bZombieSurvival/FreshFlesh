const express = require("express");
const router = express.Router();
var app = express();

router.get("/", function(req, res){
    res.sendFile(__dirname + "/public/components/home/home.html")
})

module.exports = router;
