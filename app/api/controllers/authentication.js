const passport = require("passport");
const mongoose = require("mongoose");

var User = mongoose.model("User");

module.exports.register = function(req, res) {
    var user = new User();

    user.username = req.body.username;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(function(err) {
        var token = user.generateJwt();
        res.status(200);
        res.json({
            "token": token
        });
    });
};

module.exports.login = function(req, res){
    passport.authenticate("local", function(err, user, info){
        var token;

        if (err) {
            res.status(404).json(err);
            return;
        }

        //If user found
        if(user){
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        }
        else {
            //if user not found
            res.status(401).json(info);
        }
    })(req, res);
};
