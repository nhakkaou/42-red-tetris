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
        origin: '*',
        credentials: true,
      })
    );
    this.http = http.Server(this.app);
    var io = require("socket.io")(this.http, {
      pingInterval: 60000,
      cors: {
        origin: "*",
      },
    });
    io
      .on("connection", function (socket) {
        socket.on("join", (rs) => {
          let a = rooms.find(
            (element) => element.user === rs.user && element.room === rs.room
          );
          console.log(socket.rooms);
          console.log(rooms);
          if (!a || a.user !== rs.user) {
            let c = 1;
            for (let i = 1; i < rooms.length; i++)
              if (rs.room == rooms[i].room) c++;
            console.log(c);
            if (c <= 5) {
              rooms.push({ user: rs.user, room: rs.room });
              console.log(rooms);
              socket.join(rs.room);
              socket.to(rs.room).emit("new member", { user: rs.user });
            } else console.log("9adiya 3amra");
          }
        });
        socket.on("new_tetriminos", (room) => {
          let rst = rnd;
          //console.log(rst);
          socket.to(room).emit("new_tetriminos", rst);
        });

        socket.on("new score", (rs) => {
          socket
            .to(rs.room)
            .emit("new score", { user: rs.user, score: rs.score });
        });
        socket.on("start game", (room) => {
          let rst = rnd;
          //console.log(rst);
          socket.to(room).emit("start game", rst);
        });
        socket.on("CreateRoom", (message) => {
          // let sym = 0;
          // for (let i = 0; i < rooms.length; i++)
          //   if (rooms[i].room == message.name) {
          //     sym = 1;
          //     socket.emit("CreateRoom", { err: "Room Existe" });
          //     break;
          //   }
          // if (sym == 0) {
          //   socket.join(message.name);
          //   rooms.push({
          //     user: message.user,
          //     room: message.name,
          //     admin: 1,
          //   });
          //   socket.emit("RoomCreated", { room: message.name, user: message.user });
          // }
          console.log(io.sockets.adapter.rooms)
          if (io.sockets.adapter.rooms.get(message.name)) {
            const data = { type: "error", message: "Room already exists!" }
            socket.emit("TOASTIFY", data);
          }
          else {
            socket.join(message.name);
            const data = { type: "success", message: "Room created!" }
            socket.emit("TOASTIFY", data);

          }
        });
      })
      .on("disconnect", function (socket) {
        socket.emit("disconnect", { message: "Server Down!!" });
      });
    this.app.get("/getRooms", (req, res) => {
      let tmp = [];
      for (let i = 0; i < rooms.length; i++) {
        let j = 0;
        let c = 0;
        while (j < rooms.length) {
          if (rooms[i].room == rooms[j].room) c++;
          j++;
        }
        tmp.push({ room: rooms[i].room, members: c });
      }
      res.send(tmp);
    });
  }
  listen() {
    this.http.listen(4242, () => {
      console.log(`Listening ...`);
    });
  }
}
const server = new Server();
server.listen();
