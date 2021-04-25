export const ADD_PLAYER_NAME = "ADD_PLAYER_NAME"
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const ADMIN_PLAYER = "ADMIN_PLAYER";

const addPlayerName = (data) => ({
  type: ADD_PLAYER_NAME,
  data: data,
});

const updateplayer = (data) => ({
  type: UPDATE_PLAYER,
  data: data,
});


export { addPlayerName, updateplayer };
