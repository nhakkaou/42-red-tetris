import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledInput, RoomWrapper, StyledSelect, InputsWrapper } from "./styling/StyledForm";
import { UPDATE_MODE } from "../actions/roomAction";

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
    <RoomWrapper>
      <InputsWrapper>
        <StyledInput
          placeholder="Room"
          onChange={(e) => setRoomname(e.target.value)}
        />
        <StyledSelect value={mode} onChange={(e) => setMode(e.target.value)}>
          <option>Solo</option>
          <option>Multiplayer</option>
        </StyledSelect>
      </InputsWrapper>
      <StyledButton type="submit" onClick={() => addRoom()}>Submit</StyledButton>
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
    </RoomWrapper>
  );
};

export default Rooms;
