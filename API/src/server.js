const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

class Server {
  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.http = http.Server(this.app);
    this.io = require("socket.io")(this.http);
    this.io
      .on("connection", function (socket) {
        socket.emit("connection", { message: "Server good!!" });
      })
      .on("disconnect", function (socket) {
        socket.emit("disconnect", { message: "Server Down!!" });
      });
  }
  listen() {
    this.http.listen(4242, () => {
      console.log(`Listening on http://localhost:4242`);
    });
  }
}
const server = new Server();
server.listen();
