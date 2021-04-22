export const ADD_PLAYER_NAME = "ADD_PLAYER_NAME"
export const UPDATE_PLAYER = "UPDATE_PLAYER";
<<<<<<< HEAD
export const DELETE_PLAYER = "DELETE_PLAYER";

const addPlayerName = (data) => ({
  type: ADD_PLAYER_NAME,
  data: data,
});
=======
export const ADMIN_PLAYER = "DELETE_PLAYER";
>>>>>>> 3c74ef6955065aa7e7961414a5ee586dc8e26e30
const updateplayer = (data) => ({
  type: UPDATE_PLAYER,
  data: data,
});
const adminplayer = (data) => ({
  type: ADMIN_PLAYER,
  data: data,
});
<<<<<<< HEAD

export { addPlayerName, updateplayer, deleteplayer };
=======
export { updateplayer, adminplayer };
>>>>>>> 3c74ef6955065aa7e7961414a5ee586dc8e26e30
