import { UPDATE_PLAYER } from "../actions/playerAction";

const DEFAULT_STATE = {
  tetrominos: [
      "I",
      "I",
      "I"
  ]
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_PLAYER: {
      //console.log(action.data)
      return { tetrominos: [...action.data] };
    }
    default:
      return state;
  }
}
