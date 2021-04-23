import React, { useEffect } from "react";
import AddName from "./Components/AddName";
import Tetris from "./Components/Multiplayer";
import Rooms from "./Components/Rooms"
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import "./App.css"
import { socket } from "./hooks";
import { UPDATE_NAME } from "./actions/roomAction";
import { UPDATE_PLAYER } from "./actions/playerAction";
import { ADD_PLAYER } from "./actions/plyersAction";

function App() {
  let State = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.substring(1);
      if (!hash.trim()) return;
      const regexp = /(?<room>[a-zA-Z0-9]{1,12})\[(?<usr>[a-zA-Z0-9]{1,12})\]/;
      const found = hash.match(regexp);
      if (!found) {
        toast.error(
          "[ERROR] Player and Room names must be 1 to 12 alphanumeric characters in length"
        );
        return;
      }
      let tab = [
        {
          user: found.groups.usr,
          score: 0,
        },
      ];
      socket.emit("join", { user: found.groups.usr, room: found.groups.room });
      dispatch({ type: UPDATE_NAME, data: found.groups.room });
      dispatch({ type: UPDATE_PLAYER, data: found.groups.usr });
      dispatch({ type: ADD_PLAYER, data: tab });
    };

    checkHash();
  }, [])

  return (
    <div>
      <h1>Red T e t r i s</h1>
      <ToastContainer />
      {State.player.username === "" ? <AddName /> : State.room.name === "" ? <Rooms /> : <Tetris />}
    </div>
  );
}

export default App;
