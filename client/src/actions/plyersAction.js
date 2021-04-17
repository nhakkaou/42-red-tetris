export const UPDATE_SCORE = "UPDATE_SCORE";

export const ADD_PLAYER = "ADD_PLAYER";

const updatescore = (data) => ({
  type: UPDATE_SCORE,
  data: data,
});

const addplayer = (data) => ({
  type: ADD_PLAYER,
  data: data,
});
export { updatescore, addplayer };
