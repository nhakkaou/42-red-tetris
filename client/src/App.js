import React from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signin from "./signin";
import Home from "./home";

function App() {
  console.log("TEST");
  let socket = io("http://localhost:4242/");
  console.log(socket);
  socket.on("connection", (socket) => {
    console.log(socket.message);
  });
  socket.on("disconnect", (socket) => {
    console.log("Server Down");
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
