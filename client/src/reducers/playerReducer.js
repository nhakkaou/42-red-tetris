import { UPDATE_PLAYER, ADD_PLAYER_NAME } from "../actions/playerAction";

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
      //console.log(action.data)
      return { ...action.data };
    }
    default:
      return state;
  }
}
