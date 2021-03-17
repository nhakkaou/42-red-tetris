import "./App.css";
import styled from "styled-components";
import { useState } from "react";
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
  let user = localStorage.getItem("Usr");
  function adduser() {
    // setFullWidth(e.target.value);
    localStorage.setItem("Usr", fullWidth);
  }
  const [fullWidth, setFullWidth] = useState("true");
  return typeof user == "object" ? (
    <div className="App">
      {user}
      <Styled
        placeholder="Username"
        onChange={(e) => setFullWidth(e.target.value)}
      />
      {/* <Styled placeholder="Room Id" /> */}
      <Button type="submit" onClick={() => adduser()} value="Submit" />
    </div>
  ) : (
    <div>
      <Button type="submit" value="Create Room" />
      <Button className="test" type="submit" value="Join Room" />
      <Button type="submit" value="Play Solo" />
    </div>
  );
};

export default App;
