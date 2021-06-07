import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledInput } from "./styling/StyledForm";
import { UPDATE_MODE } from "../actions/roomAction";
import styled from "styled-components";

const Select = styled.select`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 12px;
  border-radius: 20px;
  border: 4px solid #333;
  color: #ffffff;
  background: #000;
  font-size: 1.8 rem;
`;
const Rooms = () => {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);
  const [Room, setRoomname] = useState("");
  const [mode, setMode] = useState("Solo");
  let playerState = useSelector((state) => {
    return state.player;
  });

  function addRoom() {
    window.location.hash = `${Room}[${playerState.username}]`;
    dispatch({ type: UPDATE_MODE, data: mode });
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/getRooms`).then((res) => {
      setRooms([...res.data]);
    });
  }, []);

  return (
    <div>
      <StyledInput
        placeholder="Create room"
        onChange={(e) => setRoomname(e.target.value)}
      />
      <Select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option>Solo</option>
        <option>Multiplayer</option>
      </Select>
      <StyledButton type="submit" onClick={() => addRoom()} value="Create" />
      <table style={{ borderWidth: "5px" }}>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Members</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(
            (item, i) =>
              item.room.length > 0 && (
                <tr style={{ margin: "0 auto", borderWidth: "5px" }} key={i}>
                  <td style={{ borderWidth: "5px" }}>
                    <strong>
                      <a
                        style={{
                          textDecoration: "none",
                          color: "White",
                        }}
                        href={`http://localhost:3000/#${item.room}[${playerState.username}]`}
                      >
                        {item.room}
                      </a>
                    </strong>
                  </td>
                  <td style={{ borderWidth: "5px" }}>{item.members}/5</td>
                  <td style={{ borderWidth: "5px" }}>{item.mode}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
