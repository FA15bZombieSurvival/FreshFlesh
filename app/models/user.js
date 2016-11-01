const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString("hex");
};

user.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString("hex");
    return this.hash === hash;
};

userSchema.methods.generateJwt = function(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
        exp: parseInt(expiry.getTime() / 1000)
    }, "MY_SECRET"); //TODO Store secret somewhere else (environment variable on server)
};

 module.exports = mongoose.model("User", userSchema);
