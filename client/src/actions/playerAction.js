export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";
const updateplayer = (data) => ({
  type: UPDATE_PLAYER,
  data: data,
});
const deleteplayer = (data) => ({
  type: UPDATE_PLAYER,
  data: data,
});
export { updateplayer, deleteplayer };
