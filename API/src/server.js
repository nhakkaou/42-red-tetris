const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const rnd = require("./helpers");
class Server {
  constructor() {
    let users = [{ admin: 0, id: "", user: "" }];
    let rooms = [{ user: "", room: "" }];
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        origin: process.env.URL_SERVER,
        credentials: true,
      })
    );
    this.http = http.Server(this.app);
    this.io = require("socket.io")(this.http, {
      pingInterval: 60000,
      cors: {
        origin: "*",
      },
    });
    this.io
      .on("connection", function (socket) {
        if (socket.handshake.query.usr.length > 0) {
          users.push({ id: socket.id, user: socket.handshake.query.usr });
        }

        socket.emit("connection", { message: "Server good!!" });
        socket.on("tetrimino", async () => {
          let rs = await rnd;
          console.log(rs);
          if (rs.length > 0) socket.emit("new_tetriminos", rs);
        });
        socket.on("CreateRoom", (message) => {
          let sym = 0;
          for (let i = 0; i < rooms.length; i++)
            if (rooms[i].room == message.name) {
              sym = 1;
              socket.emit("CreateRoom", { err: "Room Existe" });
              break;
            }
          if (sym == 0) {
            socket.join(message.name);
            rooms.push({
              user: socket.handshake.query.usr,
              room: message.name,
            });
            socket.emit("CreateRoom", { msg: "Room created" });
          }
          console.log(rooms);
          console.log(socket.rooms);
          // console.log(JSON.parse(socket.rooms))
        });
        // console.log(users);
      })
      .on("disconnect", function (socket) {
        socket.emit("disconnect", { message: "Server Down!!" });
      });
    this.app.get("/home", (req, res) => {
      let rst = rnd;
      console.log(rst);
      res.send(rst);
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
