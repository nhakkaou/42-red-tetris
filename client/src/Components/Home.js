import React from "react";
import Tetris from "./Multiplayer";
import AddName from "./AddName";
import Rooms from "./Rooms";
import { socket } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_NAME } from "../actions/roomAction";

function Home() {
  let playerState = useSelector((state) => {
    return state.player;
  });
  const dispatch = useDispatch();
  if (window.location.hash.match(/[a-zA-Z0-9]+[[a-zA-Z0-9]+]/)) {

    let a = window.location.hash.match(/(?<room>[a-zA-Z0-9]+)\[(?<usr>[a-zA-Z0-9]+)\]/);
    console.log('dekhel hna', a)
    socket.emit("join", { user: a.groups.usr, room: a.groups.room });
    dispatch({ type: UPDATE_NAME, data: a.groups.room });
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
