const mongoose = require("mongoose");

var User = mongoose.model("User");

//TODO Add more error catching
module.exports.profileRead = function(req, res) {
    //If no user ID found
    if(!req.payload._id) {
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    }
    else {
        User
        .findById(req.payload._id)
        .exec(function(err, user) {
            res.status(200).json(user);
        });
    }
};
