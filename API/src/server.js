const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const helpers = require("./helpers");
const { leaveRoom, joinRoom } = require("./methodsRoom");
const { new_score, Loser } = require("./methodsPlayer");
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
        leaveRoom(socket, Players, io, Rooms).then((res) => {
          Players = res.Players;
          Rooms = res.Rooms;
        });
      });
      socket.on("new_tetriminos", (room) => {
        let rst = helpers.randomTetromino();
        io.sockets.in(room).emit("new_tetriminos", rst);
      });

      socket.on("new score", (rs) => {
        new_score(Players, io, socket, rs);
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
        Loser(data, io, Players);
      });

      socket.on("joinRoom", (data) => {
        if (
          helpers.validateName(data.user) &&
          helpers.validateName(data.room)
        ) {
          joinRoom(socket, data, io, Rooms, Players).then((r) => {
            Players = r.Players;
            Rooms = r.Rooms;
          });
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
          tmp.push({
            room: element.room,
            members: c,
            mode: Rooms.find((el) => el.name == element.room).mode,
          });
      });
      res.send(tmp);
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
