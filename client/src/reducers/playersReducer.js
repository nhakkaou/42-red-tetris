import { UPDATE_SCORE, ADD_PLAYER } from "../actions/playersAction";

const DEFAULT_STATE = [];

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "RESET_STATE": {
      return DEFAULT_STATE;
    }
    case UPDATE_SCORE: {
      return { score: action.data };
    }
    case ADD_PLAYER: {
      return [...action.data];
    }

    default:
      return state;
  }
}
