const mongoose = require("mongoose");
const crypto = require("crypto");

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
})

 module.exports = mongoose.model("User", userSchema);
