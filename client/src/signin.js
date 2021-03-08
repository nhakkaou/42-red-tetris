import "./App.css";
import styled from "styled-components";
import src from "./fonts/Pixel-LCD-7.woff";
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
  width: 8%;
  color: #ffffff;
  background: #000;
  font-size: 16px;
  cursor: wait;
  :hover {
    background: #333;
  }
`;
function App() {
  return (
    <div className="App">
      <h1>1 3 3 7 e t r i s</h1>
      <Styled placeholder="Username" />
      <Styled placeholder="Room Id" />
      <Button type="submit" value="Submit" />
    </div>
  );
}

export default App;
