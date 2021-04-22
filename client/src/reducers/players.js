import { UPDATE_SCORE, ADD_PLAYER } from "../actions/plyersAction";

const DEFAULT_STATE = [];

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_SCORE: {
      console.log(action.data);
      return { score: action.data };
    }
    case ADD_PLAYER: {
      return [...action.data];
    }
    default:
      return state;
  }
}
