import React from "react";
import { io } from "socket.io-client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from "./signin"
import Home from "./home"

function App() {
  var connectionOptions =  {
    "force new connection" : true,
    "reconnectionAttempts": "Infinity",
    "timeout" : 10000,
 };
  const socket = io("http://localhost:4242", {withCredentials: true});
  socket.on("connection", (socket) => {
    console.log(socket.handshake.headers); // an object containing "my-custom-header": "1234"
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
