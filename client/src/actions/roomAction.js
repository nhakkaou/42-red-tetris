import { socket } from "../hooks";

export const UPDATE_MEMBER = "UPDATE_MEMBER";
export const CHANGE_PIECE = "CHANGE_PIECE";
export const START_GAME = "START_GAME";
export const UPDATE_NAME = "UPDATE_NAME";

const updatemember = (data) => ({
  type: UPDATE_MEMBER,
  data: data,
});
const nextpiece = (data) => ({
  type: CHANGE_PIECE,
  data: data,
});
const startgame = (data) => ({
  type: START_GAME,
  data: data,
});
const updatename = (data) => ({
  type: UPDATE_NAME,
  data: data,
});
const createRoom = (usr, room) => {
  return dispatch => {
    socket.emit("CreateRoom", { name: room, user: usr });
  };
};
export { startgame, updatemember, nextpiece, updatename, createRoom };
