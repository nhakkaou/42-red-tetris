import React, { useEffect, useState } from "react";
import "./App.css";
import url from "./img/tetriminos.mp3";
import Tetris from "./Components/Tetris";

function App() {
  // https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Ffuneral-gifs&psig=AOvVaw2vycjcwt8l578Lzz9mRFS4&ust=1615224785520000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMju-rDbnu8CFQAAAAAdAAAAABAT
  // const [audio] = useState(new Audio(url));
  // const [playing, setPlaying] = useState(true);

  // const toggle = () => setPlaying(!playing);

  // // useEffect(() => {
  // //   playing ? audio.play() : audio.pause();
  // // }, [playing]);

  // useEffect(() => {
  //   audio.play();
  //   // audio.addEventListener("ended", () => audio.play());
  // }, []);
  return (
    <div className="App">
      <h1>1 3 3 7 e t r i s</h1>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
      <Tetris />
    </div>
  );
}

export default App;
