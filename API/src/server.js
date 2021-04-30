const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const helpers = require("./helpers");
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
          let rst = helpers.randomTetromino();
          //console.log(rst, room);
          socket.to(room).emit("new_tetriminos", rst);
        });

        socket.on("new score", (rs) => {
          socket
            .to(rs.room)
            .emit("new score", { user: rs.user, score: rs.score });
        });
        socket.on("start game", (room) => {
          let rst = helpers.randomTetromino();
          console.log(room);
          io.sockets.in(room).emit("start game", rst);
        });
        socket.on("joinRoom", (data) => {
          if (helpers.validateName(data.user) && helpers.validateName(data.room)) {
            if (io.sockets.adapter.rooms.get(data.room)) {
              const clients = io.sockets.adapter.rooms.get(data.room);
              const numClients = clients ? clients.size : 0;
              console.log('Clients', clients.size)
              if (numClients + 1 > 5) {
                console.log('3amra')
                const message = { type: "error", message: "Room is full!" }
                socket.emit("TOASTIFY", message);
                return;
              }
              else {
                socket.join(data.room);
                const message = { type: "success", message: "Joined room!" }
                socket.emit("Join_success", data)
                socket.emit("TOASTIFY", message);
              }
            }
            else {
              socket.join(data.room);
              console.log(io.sockets.adapter.rooms.get(data.room).size);

              const message = { type: "success", message: "Created room!" }
              socket.emit("Join_success", { ...data, is_admin: true })
              socket.emit("TOASTIFY", message);
            }
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
