export const UPDATE_MEMBER = "UPDATE_MEMBER";
export const CHANGE_PIECE = "CHANGE_PIECE";
export const START_GAME = "START_GAME";

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
export { startgame, updatemember, nextpiece };
