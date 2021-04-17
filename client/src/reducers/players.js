import { UPDATE_SCORE, ADD_PLAYER } from "../actions/plyersAction";

const DEFAULT_STATE = {};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_SCORE: {
      console.log(action.data);
      return { score: action.data.score };
    }
    case ADD_PLAYER: {
      console.log(action.data);
      return { score: action.data.score };
    }
    default:
      return state;
  }
}
