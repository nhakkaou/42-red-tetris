class Player {
  Loser = (data, io, Players, Rooms) => {
    return new Promise((resolve, reject) => {
      let winner = {};
      let indexR = Rooms.findIndex((el) => el.name == data.room);
      let lostCount = 0;
      let playersArr = Players.filter((e) => e.room === data.room);
      for (let i = 0; i < playersArr.length; i++) {
        if (playersArr[i].user === data.user) {
          playersArr[i].hasLost = true;
          ++lostCount;
        } else if (
          playersArr[i].user !== data.user &&
          playersArr[i].hasLost === true
        ) {
          ++lostCount;
        }
      }
      if (playersArr.length === 1 && playersArr[0].hasLost === true) {
        Rooms[indexR].startGame = false;
      }
      if (lostCount === playersArr.length - 1) {
        const index = playersArr.findIndex((e) => e.hasLost === false);
        if (playersArr[index]) {
          winner = playersArr[index];
          Rooms[indexR].startGame = false;
          io.sockets.in(data.room).emit("Winner", winner);
        }
      }
      resolve(Rooms);
    });
  };

  new_score = (Players, io, socket, rs) => {
    let tmp = [];
    for (let i = 0; i < Players.length; i++) {
      if (Players[i].user == rs.user) Players[i].score = rs.score;
      if (Players[i].room === rs.room)
        tmp.push({
          user: Players[i].user,
          score: Players[i].score,
          stage: Players[i].stage,
        });
    }
    io.sockets.in(rs.room).emit("new score", tmp);
    socket.in(rs.room).emit("add row", tmp);
  };
}

module.exports = Player;
