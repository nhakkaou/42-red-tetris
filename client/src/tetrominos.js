export const Tetrominos = {
  0: {
    shape: [[0]],
    color: "0, 0, 0",
  },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "204, 0, 0",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "102, 255, 102",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "102, 255, 102",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "75, 181, 255",
  },
  T: {
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
    color: "255, 6, 251",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "75, 181, 255",
  },
  D: {
    shape: [
      ["D", "D", 0],
      ["D", "D", 0],
      [0, 0, 0],
    ],
    color: "35, 155, 86",
  },
};

export const randomTetromino = () => {
  const tetrominoStr = "IJLDSTZ";
  const randomTetro =
    tetrominoStr[Math.floor(Math.random() * tetrominoStr.length)];
  return Tetrominos[randomTetro];
};
