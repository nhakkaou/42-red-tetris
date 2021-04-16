import { UPDATE_PLAYER } from "../actions/playerAction";

const DEFAULT_STATE = {
  username: "",
  connected: false,
  is_lost: false,
  admin: false,
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_PLAYER: {
      //console.log(action.data)
      return { tetrominos: [...action.data] };
    }
    default:
      return state;
  }
}
