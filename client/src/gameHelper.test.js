import { Createstage, checkcollision, S_WIDTH, S_HEIGHT} from "./gameHelper";
let stage = Createstage()
let stageFull = Array.from(Array(S_HEIGHT), () => new Array(S_WIDTH).fill(['T', "merged"]))
test("Test CreateStage", () => expect(Createstage()).toStrictEqual(stage));
test("Test Collision TRUE", () => {
  let player = {
    pos: { x: S_WIDTH / 2 - 1, y: 0 },
    tetromino: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
    collided: false,
  };
  expect(checkcollision(player, stage, { x: 1, y: 0 })).toBeFalsy();
});
test("Test Collision False", () => {
  let player = {
    pos: { x: S_WIDTH / 2 - 1, y: 0 },
    tetromino: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
    collided: false,
  };
  expect(checkcollision(player, stageFull, { x: 1, y: 0 })).toBeTruthy();
});