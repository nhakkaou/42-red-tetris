import { UPDATE_PLAYER, ADMIN_PLAYER } from "../actions/playerAction";

const DEFAULT_STATE = {
  username: "",
  connected: false,
  is_lost: false,
  admin: false,
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_PLAYER: {
      return { ...state, username: action.data, connected: true };
    }

    case ADMIN_PLAYER: {
      return { ...state, admin: true };
    }
    default:
      return state;
  }
}
