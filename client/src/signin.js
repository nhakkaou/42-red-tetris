import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { socket } from "./hooks/index";

const Styled = styled.input`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 50px auto;
  padding: 20px;
  border-radius: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 30%;
  color: #ffffff;
  background: #000;
  font-size: 1.8 rem;
`;
const Button = styled.input`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 50px auto;
  padding: 20px;
  border-radius: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: auto;
  color: #ffffff;
  background: #000;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background: #333;
    .test {
      display: none;
    }
  }
`;

const App = () => {
  socket.on("CreateRoom", (message) => {
    if (message.err) alert(message.err);
    else console.log(message.msg);
  });
  socket.on("connection", function (socket) {});
  socket.on("disconnect", (socket) => {
    console.log("Server Down");
  });

  const [sym, setSym] = useState(0);
  const [Room, setRoomname] = useState("");
  let user = localStorage.getItem("Usr");
  function adduser() {
    localStorage.setItem("Usr", fullWidth);
  }
  function addRoom() {
    console.log(Room);
    socket.emit("CreateRoom", { name: Room });
  }
  const [fullWidth, setFullWidth] = useState("true");
  return typeof user == "object" ? (
    <div className="App">
      {user}
      <Styled
        placeholder="Username"
        onChange={(e) => setFullWidth(e.target.value)}
      />
      <Button type="submit" onClick={() => adduser()} value="Submit" />
    </div>
  ) : (
    <div>
      <Button type="submit" onClick={() => setSym(1)} value="Create Room" />
      {sym == 1 ? (
        <>
          <Button
            type="text"
            placeholder="Room name"
            onChange={(e) => setRoomname(e.target.value)}
            value={Room}
          />
          <Button type="submit" onClick={() => addRoom()} value="Submit" />
        </>
      ) : (
        <>
          <Button className="test" type="submit" value="Join Room" />
          <Button type="submit" value="Play Solo" />
        </>
      )}
    </div>
  );
};

export default App;
