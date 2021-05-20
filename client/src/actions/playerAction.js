import { socket } from "../hooks";

export const ADD_PLAYER_NAME = "ADD_PLAYER_NAME";
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const ADMIN_PLAYER = "ADMIN_PLAYER";
export const PLAYER_LOST = "PLAYER_LOST";
export const SET_ROW = "SET_ROW";
const addPlayerName = (data) => ({
  type: ADD_PLAYER_NAME,
  data: data,
});

const updateplayer = (data) => ({
  type: UPDATE_PLAYER,
  data: data,
});

const playerLost = (data) => {
  return (dispatch) => {
    socket.emit("Loser", data)
  };
}

export { addPlayerName, updateplayer, playerLost };
