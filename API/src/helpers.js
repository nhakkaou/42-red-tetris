const arr = [];
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var pieces = [];
function randomTetromino() {
  if (pieces.length == 0)
    pieces = [
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
    ];

  const randomTetro = pieces.splice(
    randomIntFromInterval(0, pieces.length - 1),
    1
  )[0];
  arr.push(randomTetro);
  if (arr.length >= 3) return arr;
  else return randomTetromino();
}
module.exports = randomTetromino();
