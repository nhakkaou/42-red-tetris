import React, { useEffect, useState } from "react";
import "./App.css";
import Tetris from "./Components/Multiplayer";
import { socket } from "./hooks";

function App(props) {
  console.log(props);
  if (props.path.match(/#[a-zA-Z0-9]+[[a-zA-Z0-9]+]/)) {
    let a = props.path.match(/#(?<room>[a-zA-Z0-9]+)\[(?<usr>[a-zA-Z0-9]+)\]/);
    console.log(a);
    socket.emit("join", { user: a.groups.usr, room: a.groups.room });
  }
  return (
    <div className="App">
      <Tetris />
    </div>
  );
}

export default App;
