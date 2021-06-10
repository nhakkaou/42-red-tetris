import {
  UPDATE_PLAYER,
  ADD_PLAYER_NAME,
  ADMIN_PLAYER,
  PLAYER_LOST,
  SET_ROW,
} from "../actions/playerAction";
import { START_GAME } from "../actions/roomAction";

const DEFAULT_STATE = {
  username: "",
  connected: false,
  lost: false,
  admin: false,
  row: 0,
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_PLAYER_NAME: {
      return { ...state, username: action.data };
    }
    case UPDATE_PLAYER: {
      return {
        ...state,
        username: action.data.user,
        connected: true,
        admin: action.data.is_admin ? true : false,
      };
    }
    case ADMIN_PLAYER: {
      return { ...state, admin: true };
    }
    case PLAYER_LOST: {
      return { ...state, lost: true };
    }
    case SET_ROW: {
      return { ...state, row: action.data };
    }
    case START_GAME: {
      return { ...state, lost: false };
    }
    default:
      return state;
  }
}
