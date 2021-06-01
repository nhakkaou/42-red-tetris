const Loser = (data, io, Players) => {
  let winner = {};
  let lostCount = 0;
  for (let i = 0; i < Players.length; i++) {
    if (Players[i].user === data.user) {
      Players[i].hasLost = true;
      ++lostCount;
    } else if (Players[i].user !== data.user && Players[i].hasLost === true) {
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
};

const new_score = (Players, io, socket, rs) => {
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
module.exports = { Loser, new_score };
