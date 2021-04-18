import styled from "styled-components";
import { useState } from "react";
import { socket } from "../hooks/index";
import { useHistory } from "react-router-dom";
import { addPlayerName } from "../actions/playerAction";
import { useDispatch } from "react-redux";
import Rooms from "./Rooms";

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

const AddName = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [username, setUserName] = useState("");

    socket.on("CreateRoom", (message) => {
        if (message.err) console.warn(message.err);
        else console.log(message.msg);
    });
    socket.on("connection", function (socket) { });
    socket.on("disconnect", (socket) => {
        console.log("Server Down");
    });
    function adduser() {
        console.log(username)
        dispatch(addPlayerName(username));
        //return <Rooms />
    }

    return (
        <div className="App">
            <Styled
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
            />
            <Button type="submit" onClick={() => adduser()} value="Submit" />
        </div>
    )

};

export default AddName;
