import React, { useEffect } from "react";
import AddName from "./Components/AddName";
import Tetris from "./Components/Multiplayer";
import Rooms from "./Components/Rooms";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let State = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <h1>Red T e t r i s</h1>
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
