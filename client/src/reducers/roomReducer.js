import {
  UPDATE_MEMBER,
  START_GAME,
  CHANGE_PIECE,
  UPDATE_NAME,
  ROOM_JOINED
} from "../actions/roomAction";

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
      return { ...state, members: action.data };
    }
    case START_GAME: {
      //console.log(action.data)
      return { ...state, startgame: true };
    }
    case CHANGE_PIECE: {
      //console.log(action.data)
      return { ...state, next_piece: [...action.data] };
    }
    case UPDATE_NAME: {
      //console.log(action.data)
      return { ...state, name: action.data };
    }
    case ROOM_JOINED: {
      return { ...state, name: action.data.room };
    }
    default:
      return state;
  }
}
