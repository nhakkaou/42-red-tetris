import React from "react";
import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  Route,
} from "react-router-dom";
import Signin from "./signin";
import Home from "./home";
import styled from "styled-components";
import JoinRoom from "./Components/Rooms";
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

  return (
    <Router>
      <div>
        <h1>1 3 3 7 e t r i s</h1>
        <Switch>
          {/* <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/joinroom">
            <JoinRoom />
          </Route> */}
          <Route path="/">
            <Home path={window.location.hash} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
