export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const ADMIN_PLAYER = "DELETE_PLAYER";
const updateplayer = (data) => ({
  type: UPDATE_PLAYER,
  data: data,
});
const adminplayer = (data) => ({
  type: ADMIN_PLAYER,
  data: data,
});
export { updateplayer, adminplayer };
