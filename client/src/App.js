import React from "react";
import AddName from "./Components/AddName";
import Tetris from "./Components/Multiplayer";
import Rooms from "./Components/Rooms";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let State = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1 onClick={() => { dispatch({ type: "RESET_STATE" }); window.location.hash = "" }} style={{ cursor: "pointer" }}>Red Tetris</h1>
      <ToastContainer />
      {State.player.username === "" ? (
        <AddName />
      ) : State.room.name === "" ? (
        <Rooms />
      ) : (
        <Tetris />
      )}
    </div>
  );
}

export default App;
