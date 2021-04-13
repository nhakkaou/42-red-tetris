const arr = [];
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomTetromino() {
  const pieces = ["I", "J", "L", "L", "D", "S", "T", "Z"];

  const randomTetro = pieces.splice(
    randomIntFromInterval(0, pieces.length - 1),
    1
  )[0];
  arr.push(randomTetro);
  if (arr.length >= 3) return arr;
  else return randomTetromino();
}
module.exports = randomTetromino();
