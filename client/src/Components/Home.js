import React from "react";
import Tetris from "./Multiplayer";
import AddName from "./AddName";
import Rooms from "./Rooms";
import { socket } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_NAME } from "../actions/roomAction";
import { UPDATE_PLAYER } from "../actions/playerAction";
import { ADD_PLAYER } from "../actions/plyersAction";

function Home() {
  let playerState = useSelector((state) => {
    return state.player;
  });
  const dispatch = useDispatch();
  if (window.location.hash.match(/[a-zA-Z0-9]{1,12}[[a-zA-Z0-9]{1,12}]/)) {

    let a = window.location.hash.match(/(?<room>[a-zA-Z0-9]{1,12})\[(?<usr>[a-zA-Z0-9]{1,12})\]/);
    let tab = [
      {
        user: a.groups.usr,
        score: 0,
      },
    ];
    socket.emit("join", { user: a.groups.usr, room: a.groups.room });
    dispatch({ type: UPDATE_NAME, data: a.groups.room });
    dispatch({ type: UPDATE_PLAYER, data: a.groups.usr });
    dispatch({ type: ADD_PLAYER, data: tab });
    return (
      <div className="App">
        <Tetris />
      </div>
    );
  }
  else if (playerState.username === "") {
    return <AddName />
  }
  else
    return <Rooms />
}

export default Home;
