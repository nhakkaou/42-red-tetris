import { UPDATE_PLAYER, DELETE_PLAYER } from "../actions/playerAction";

const DEFAULT_STATE = {
  tetrominos: [
    {
      shape: [
        ["D", "D", 0],
        ["D", "D", 0],
        [0, 0, 0],
      ],
      color: "35, 155, 86",
    },
    {
      shape: [
        [0, "L", 0],
        [0, "L", 0],
        [0, "L", "L"],
      ],
      color: "102, 255, 102",
    },
    {
      shape: [
        ["I", "I", "I", "I"],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      color: "204, 0, 0",
    },
    {
      shape: [
        [0, "S", "S"],
        ["S", "S", 0],
        [0, 0, 0],
      ],
      color: "75, 181, 255",
    },
    {
      shape: [
        ["T", "T", "T"],
        [0, "T", 0],
        [0, 0, 0],
      ],
      color: "255, 6, 251",
    },
    {
      shape: [
        ["Z", "Z", 0],
        [0, "Z", "Z"],
        [0, 0, 0],
      ],
      color: "75, 181, 255",
    },
    {
      shape: [
        [0, "L", 0],
        [0, "L", 0],
        [0, "L", "L"],
      ],
      color: "102, 255, 102",
    },
    {
      shape: [
        ["T", "T", "T"],
        [0, "T", 0],
        [0, 0, 0],
      ],
      color: "255, 6, 251",
    },
    {
      shape: [
        ["I", "I", "I", "I"],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      color: "204, 0, 0",
    },
    {
      shape: [
        ["I", "I", "I", "I"],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      color: "204, 0, 0",
    },
  ],
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_PLAYER:
      return { tetrominos: [...action.data] };
    case DELETE_PLAYER: {
      // let res = action.data;
      // res.shift();
      console.log(action.data);
      return { tetrominos: [, ...action.data] };
    }
    default:
      return state;
  }
}
