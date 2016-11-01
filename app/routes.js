const express = require("express");
const router = express.Router();
const jwt = require("express-jwt");
const ProfileCtrl = //TODO require profile.js

var app = express();

var auth = jwt({
    secret: "MY_SECRET",
    userProperty: "payload"
});

router.get("/", function(req, res){
});

router.get("/profile", auth, ProfileCtrl.profileRead);

module.exports = router;
