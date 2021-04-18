export const ADD_PLAYER_NAME = "ADD_PLAYER_NAME"
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";

const addPlayerName = (data) => ({
  type: ADD_PLAYER_NAME,
  data: data,
});
const updateplayer = (data) => ({
  type: UPDATE_PLAYER,
  data: data,
});
const deleteplayer = (data) => ({
  type: UPDATE_PLAYER,
  data: data,
});

export { addPlayerName, updateplayer, deleteplayer };
