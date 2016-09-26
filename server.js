//Server setup requirements
const express = require("express");
const app = express();
const router = express.Router();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

//Additional modules
const UUID = require("node-uuid");

//Server settings
app.use(router);

router.use(express.static(__dirname + "/app"));

server.listen(80, () => {
    console.log("Server is running at localhost");
});

//Routes
router.get("/", (req, res) => {
    res.sendFile(__dirname + "/app/public/index.html");
});
