const leaveRoom = (socket, Players, io, Rooms) => {
  return new Promise((resolve, reject) => {
    let cmptr = 0;
    let winner = {};
    let tmp = Players.find((el) => el.socketId === socket.id);
    if (tmp) {
      socket.leave(tmp.room);
      let tmp2 = Players.filter((el) => el.socketId !== socket.id);
      Players = tmp2;
      for (let i = 0; i < Players.length; i++) {
        if (Players[i].room === tmp.room && !Players[i].hasLost) {
          winner = Players[i];
          cmptr++;
        }
      }
      if (cmptr === 1) io.sockets.in(tmp.room).emit("Winner", winner);
      if (cmptr === 0) Rooms = Rooms.filter((el) => el.name !== tmp.room);
      if (tmp.admin === true) {
        let i = Players.findIndex((el) => el.room === tmp.room);
        Players[i] = {
          ...Players[i],
          admin: true,
        };
        socket.to(Players[i].socketId).emit("Update Admin", {
          user: Players[i],
          is_admin: Players[i].admin,
        });
      }
      io.sockets.in(tmp.room).emit(
        "new member",
        Players.filter((e) => e.room === tmp.room)
      );
      resolve({
        Players: Players,
        Rooms: Rooms,
      });
    }
  });
};
const joinRoom = (socket, data, io, Rooms, Players) => {
  return new Promise((resolve, reject) => {
    if (io.sockets.adapter.rooms.get(data.room)) {
      const clients = io.sockets.adapter.rooms.get(data.room);
      const tmpRoom = Rooms.find((el) => el.name === data.room);
      const numClients = clients ? clients.size : 0;
      if (tmpRoom && tmpRoom.startGame)
        return socket.emit("TOASTIFY", {
          type: "error",
          message: "the game is started",
        });
      if (numClients + 1 > 5) {
        const message = { type: "error", message: "Room is full!" };
        socket.emit("TOASTIFY", message);
        return;
      } else {
        let a = Players.find(
          (element) => element.user === data.user && element.room === data.room
        );

        if (!a || a.user !== data.user) {
          if (tmpRoom && tmpRoom.mode === "Solo") {
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
          socket.join(data.room);
          const message = { type: "success", message: "Joined room!" };
          socket.emit("Join_success", data);
          socket.emit("TOASTIFY", message);
        } else
          return socket.emit("TOASTIFY", {
            type: "error",
            message: "Username Already existe",
          });
      }
    } else {
      socket.join(data.room);
      let a = Players.find(
        (element) => element.user === data.user && element.room === data.room
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
      Rooms.push({ name: data.room, mode: data.mode, startGame: false });
      const message = { type: "success", message: "Created room!" };
      socket.emit("Join_success", { ...data, is_admin: true });
      socket.emit("TOASTIFY", message);
    }
    let arr = Players.filter((element) => element.room === data.room);
    io.sockets.in(data.room).emit("new member", arr);
    resolve({
      Players: Players,
      Rooms: Rooms,
    });
  });
};

module.exports = {
  leaveRoom,
  joinRoom,
};
