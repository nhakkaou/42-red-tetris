const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

class Server {
  constructor() {
    let users = [{ admin: 0, id: "", user: "" }];
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.http = http.Server(this.app);
    this.io = require("socket.io")(this.http);
    this.io
      .on("connection", function (socket) {
        if (socket.handshake.query.usr.length > 0) {
          users.push({ id: socket.id, user: socket.handshake.query.usr });
          socket.join("GHORFA");
        }

        socket.emit("connection", { message: "Server good!!" });
        socket.on("tetrimino", (message) => {
          console.log(message);
        });
        // console.log(socket.rooms);
        // console.log(users);
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
