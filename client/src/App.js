import "./app.css"
import song from "./img/tetriminos.mp3"
import Tetris from "./Components/Tetris"
function App() {
  return (
    <div className="App">
    <audio loop={true}
                    autoPlay={false}>
      <source src={song} type="audio/ogg"/>
    Your browser does not support the audio element.
    </audio>
    <h1>T e t r i s</h1>
    <Tetris/>
    </div>
  );
}

export default App;
