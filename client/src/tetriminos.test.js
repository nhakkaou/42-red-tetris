import { Tetrominos } from "./tetrominos";

test("Test Tetrominos", () => {
  expect(Tetrominos[0]).toEqual({
      color: "0, 0, 0",
      shape: [[0]],
  }); 
  expect(Tetrominos['J']).toEqual({
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "102, 255, 102",
  });
  expect(Tetrominos['L']).toEqual({
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "102, 255, 102",
  });
  expect(Tetrominos['S']).toEqual({
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "75, 181, 255",
  });
  expect(Tetrominos['T']).toEqual({
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
    color: "255, 6, 251",
  });
});
