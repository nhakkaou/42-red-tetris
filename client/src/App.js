import React from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Signin from "./signin";
import Home from "./home";
import styled from "styled-components";
import JoinRoom from "./Rooms";
function App() {
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
    }
  `;

  function useQuery() {
    console.log(new URLSearchParams());
    // return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  // console.log(query.get());
  return (
    <Router>
      <div>
        <h1>1 3 3 7 e t r i s</h1>
        <Switch>
          {/* <Route path="/">
            <Button type="submit" value="Create Room" />
            <Button type="submit" value="Join Room" />
            <Button type="submit" value="Play Solo" />
          </Route> */}
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/joinroom">
            <JoinRoom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
