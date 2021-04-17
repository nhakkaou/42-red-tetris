import { UPDATE_MEMBER, START_GAME, CHANGE_PIECE } from "../actions/roomAction";

const DEFAULT_STATE = {
  name: "",
  members: 0,
  startgame: false,
  mode: "solo",
  next_piece: [],
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_MEMBER: {
      //console.log(action.data)
      return { members: action.data };
    }
    case START_GAME: {
      //console.log(action.data)
      return { startgame: true };
    }
    case CHANGE_PIECE: {
      //console.log(action.data)
      return { next_piece: [...action.data] };
    }
    default:
      return state;
  }
}
