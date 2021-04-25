import { UPDATE_PLAYER, ADD_PLAYER_NAME, ADMIN_PLAYER } from "../actions/playerAction";

const DEFAULT_STATE = {
  username: "",
  connected: false,
  is_lost: false,
  admin: false,
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_PLAYER_NAME: {
      console.log('wer', action.data)
      return { ...state, username: action.data };
    }
    case UPDATE_PLAYER: {
      return { ...state, username: action.data.user, connected: true, admin: action.data.is_admin ? true : false };
    }

    case ADMIN_PLAYER: {
      return { ...state, admin: true };
    }
    default:
      return state;
  }
}
