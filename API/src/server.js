const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const helpers = require("./helpers");
class Server {
  constructor() {
    let Players = [];
    let Rooms = [];
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        origin: "*",
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
    io.on("connection", function (socket) {
      socket.on("disconnect", (sk) => {
        let tmp = Players.find((el) => el.socketId === socket.id);
        if (tmp) {
          socket.leave(tmp.room);
          tmp = Players.filter((el) => el.socketId !== socket.id);
          Players = tmp;
        }
      });
      socket.on("new_tetriminos", (room) => {
        let rst = helpers.randomTetromino();
        io.sockets.in(room).emit("new_tetriminos", rst);
      });
      socket.on("disconnect", reason => console.log(socket.handshake.query))
      socket.on("new score", (rs) => {
        let tmp = [];
        for (let i = 0; i < Players.length; i++) {
          if (Players[i].user == rs.user) Players[i].score = rs.score;
          tmp.push({
            user: Players[i].user,
            score: Players[i].score,
            stage: Players[i].stage,
          });
        }
        io.sockets.in(rs.room).emit("new score", tmp);
        socket.in(rs.room).emit("add row", tmp);
      });

      socket.on("Stage", (rq) => {
        io.sockets.in(rq.room).emit("Stage", {
          stage: rq.stage,
          user: rq.player,
          players: rq.players,
        });
      });

      socket.on("start game", (room) => {
        let rst = helpers.randomTetromino();
        io.sockets.in(room).emit("start game", rst);
        Players.forEach((e) => {
          e.hasLost = false;
        });
      });

      socket.on("Loser", (data) => {
        let winner = {};
        let lostCount = 0;
        for (let i = 0; i < Players.length; i++) {
          if (Players[i].user === data.user) {
            Players[i].hasLost = true;
            ++lostCount;
          } else if (
            Players[i].user !== data.user &&
            Players[i].hasLost === true
          ) {
            ++lostCount;
          }
        }
        if (lostCount === Players.length - 1) {
          const index = Players.findIndex((e) => e.hasLost === false);
          if (Players[index]) {
            winner = Players[index];
            io.sockets.in(data.room).emit("Winner", winner);
          }
        }
      });

      socket.on("joinRoom", (data) => {
        console.log("DAta:", data);
        if (
          helpers.validateName(data.user) &&
          helpers.validateName(data.room)
        ) {
          if (io.sockets.adapter.rooms.get(data.room)) {
            const clients = io.sockets.adapter.rooms.get(data.room);
            const tmpRoom = Rooms.find((el) => el.name === data.room);
            const numClients = clients ? clients.size : 0;
            if (numClients + 1 > 5) {
              const message = { type: "error", message: "Room is full!" };
              socket.emit("TOASTIFY", message);
              return;
            } else {
              let a = Players.find(
                (element) =>
                  element.user === data.user && element.room === data.room
              );
              if (!a || a.user !== data.user) {
                if (tmpRoom.mode === "Solo") {
                  socket.emit("TOASTIFY", {
                    type: "error",
                    message: "Room solo!",
                  });
                  return "";
                }
                Players.push({
                  admin: false,
                  socketId: socket.id,
                  user: data.user,
                  hasLost: false,
                  room: data.room,
                  score: 0,
                });
              }
              socket.join(data.room);
              const message = { type: "success", message: "Joined room!" };
              socket.emit("Join_success", data);
              socket.emit("TOASTIFY", message);
            }
          } else {
            socket.join(data.room);
            let a = Players.find(
              (element) =>
                element.user === data.user && element.room === data.room
            );
            if (!a || a.user !== data.user) {
              Players.push({
                admin: true,
                socketId: socket.id,
                user: data.user,
                hasLost: false,
                room: data.room,
                score: 0,
              });
            }
            Rooms.push({ name: data.room, mode: data.mode });
            const message = { type: "success", message: "Created room!" };
            socket.emit("Join_success", { ...data, is_admin: true });
            socket.emit("TOASTIFY", message);
          }
          let arr = Players.filter(
            (element) =>
              element.room === data.room
          );
          io.sockets.in(data.room).emit("new member", arr);
        }
      });
    }).on("disconnect", function (socket) {
      socket.emit("disconnect", { message: "Server Down!!" });
    });
    this.app.get("/getRooms", (req, res) => {
      let tmp = [];
      Players.forEach((element, i) => {
        let c = Players.filter((el) => el.room == element.room).length;

        if (tmp.filter((el) => el.room === element.room).length === 0)
          tmp.push({ room: element.room, members: c });
      });
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
