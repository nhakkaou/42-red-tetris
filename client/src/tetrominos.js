export const Tetrominos = {
  0: {
    shape: [[0]],
    color: "0, 0, 0",
  },
  P: {
    shape: [[0]],
    color: "36, 37, 38",
  },
  I: {
    shape: [
      ["I", "I", "I", "I"],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
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

// const randomIntFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// var pieces = [];
// export const randomTetromino = () => {
//   if (pieces.length == 0)
//     pieces = [
//       "I",
//       "I",
//       "I",
//       "I",
//       "J",
//       "J",
//       "J",
//       "J",
//       "L",
//       "L",
//       "L",
//       "L",
//       "D",
//       "D",
//       "D",
//       "D",
//       "S",
//       "S",
//       "S",
//       "S",
//       "T",
//       "T",
//       "T",
//       "T",
//       "Z",
//       "Z",
//       "Z",
//       "Z",
//     ];
//   const randomTetro = pieces.splice(
//     randomIntFromInterval(0, pieces.length - 1),
//     1
//   )[0];
//   return Tetrominos[randomTetro];
// };
