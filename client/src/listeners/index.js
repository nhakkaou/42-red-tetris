import { socket } from "../hooks/index";
import { ROOM_JOINED, CHANGE_PIECE, START_GAME } from "../actions/roomAction";
import { toast } from "react-toastify";
import { checkHash } from "../actions/checkHash";
import { UPDATE_PLAYER } from "../actions/playerAction";
import { ADD_PLAYER } from "../actions/playersAction";
import { UPDATE_MEMBER } from "../actions/roomAction";
import { S_WIDTH, S_HEIGHT, checkcollision, Createstage } from "../gameHelper";
export const stethoscope = (dispatch) => {
  window.onhashchange = () => {
    checkHash();
  };

  socket.on("connection", function (socket) {});

  socket.on("disconnect", (socket) => {
    dispatch({ type: CHANGE_PIECE, data: [] });
    console.log("Disconnected");
  });
  socket.on("new score", (result) => {
    dispatch({ type: ADD_PLAYER, data: result });
  });
  socket.on("Join_success", (data) => {
    dispatch({ type: UPDATE_PLAYER, data });
    dispatch({ type: ROOM_JOINED, data });
  });

  socket.on("start game", (data) => {
    dispatch({ type: CHANGE_PIECE, data: data });
    dispatch({ type: START_GAME, data: true });
  });

  socket.on("new_tetriminos", (data) => {
    console.log("ljadid", data);
    dispatch({ type: CHANGE_PIECE, data: data });
  });

  socket.on("new member", (result) => {
    let tmp = [];
    let i = 0;
    for (i = 0; i < result.length; i++)
      if (result[i].user !== "")
        tmp.push({ user: result[i].user, score: result[i].score });
    dispatch({ type: UPDATE_MEMBER, data: i });
    dispatch({ type: ADD_PLAYER, data: tmp });
  });

  socket.on("Winner", (rs) => {
    console.log("The Winner is " + rs.user);
    alert("The Winner is " + rs.user);
  });
  socket.on("TOASTIFY", (data) => {
    switch (data.type) {
      case "error":
        toast.error(data.message);
        break;
      case "success":
        toast.success(data.message);
        break;
      default:
        toast.error(data.message);
        break;
    }
  });
};
