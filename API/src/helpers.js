// let arr = [];
// const randomIntFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const randomTetromino = () => {
//   // prettier-ignore
//   let pieces = ["I", "I", "I", "I", "J", "J", "J", "J", "L", "L", "L", "L", "D", "D", "D", "D", "S", "S", "S", "S", "T", "T", "T", "T", "Z", "Z", "Z", "Z"];
//   while (arr.length <= 10) {
//     const randomTetro = pieces.splice(
//       randomIntFromInterval(0, pieces.length - 1),
//       1
//     )[0];
//     arr.push(randomTetro);
//   }
//   return arr;
// };

const validateName = (name) => {
  if (name.trim() === "") return false;
  if (/[a-zA-Z0-9]{1,12}/.test(name)) return true;
  return false;
};

module.exports = { validateName };
