//Server setup requirements
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

//Additional modules
const UUID = require("node-uuid");

//Server settings
app.use(express.static(__dirname + "/public"));

server.listen(80, function(){
    console.log("Server is running at localhost");
});

//Routes
app.get("/", function(req, res){
    res.sendFile(__dirname + "/app/components/index/index.html")
});
