const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.sendFile(__dirname + "/app/components/index/index.html")
})

module.exports = router;
