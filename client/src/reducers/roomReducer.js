import {
  UPDATE_MEMBER,
  START_GAME,
  RESTART_GAME,
  CHANGE_PIECE,
  UPDATE_NAME,
  ROOM_JOINED,
  GAME_OVER,
} from "../actions/roomAction";

const DEFAULT_STATE = {
  name: "",
  members: 0,
  gameStarted: false,
  mode: "solo",
  next_piece: [],
  gameOver: false
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_MEMBER: {
      return { ...state, members: action.data };
    }
    case START_GAME: {
      return { ...state, gameStarted: true, gameOver: false };
    }
    case GAME_OVER: {
      return { ...state, gameStarted: false, gameOver: true };
    }
    case CHANGE_PIECE: {
      const data = [...state.next_piece, ...action.data];
      return { ...state, next_piece: [...data] };
    }
    case UPDATE_NAME: {
      return { ...state, name: action.data };
    }
    case ROOM_JOINED: {
      return { ...state, name: action.data.room };
    }
    default:
      return state;
  }
}
