import React, { useEffect, useState } from "react";
import "./App.css";
import Tetris from "./Components/Multiplayer";
import { socket } from "./hooks";
import { useDispatch } from "react-redux";
import { UPDATE_NAME } from "./actions/roomAction";
function App(props) {
  console.log(props);
  const dispatch = useDispatch();
  if (props.path.match(/#[a-zA-Z0-9]+[[a-zA-Z0-9]+]/)) {
    let a = props.path.match(/#(?<room>[a-zA-Z0-9]+)\[(?<usr>[a-zA-Z0-9]+)\]/);
    console.log(a);
    socket.emit("join", { user: a.groups.usr, room: a.groups.room });
    dispatch({ type: UPDATE_NAME, data: a.groups.room });
  }
  return (
    <div className="App">
      <Tetris />
    </div>
  );
}

export default App;
