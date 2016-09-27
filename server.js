//Server setup requirements
const express = require("express");
const http = require("http");
const server = http.createServer();
const io = require("socket.io").listen(server);
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//Additional modules
const UUID = require("node-uuid");
const passport = require("passport");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Mongoose connection
mongoose.connect("mongodb://127.0.0.1/freshflesh");

//Server settings
var app = express();
app.set('port', process.env.PORT || 80);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'app')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

var routes = require("./app/routes.js");
app.use("/", routes);

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});
