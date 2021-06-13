import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledInput, RoomWrapper, StyledSelect, InputsWrapper, FormWrapper, TABLE, THEAD, TR, TD, TBODY, TH, JoinButton } from "./styling/StyledForm";
import { UPDATE_MODE } from "../actions/roomAction";

const Rooms = () => {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);
  const [Room, setRoomname] = useState("");
  const [mode, setMode] = useState("Solo");
  let playerState = useSelector((state) => {
    return state.player;
  });

  function addRoom(e) {
    e.preventDefault();
    window.location.hash = `${Room}[${playerState.username}]`;
    dispatch({ type: UPDATE_MODE, data: mode });
  }

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/getRooms`).then((res) => {
      setRooms([...res.data]);
    });
  }, []);

  return (
    <RoomWrapper onSubmit={(e) => addRoom(e)}>
      <FormWrapper>
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
        <StyledButton type="submit">Submit</StyledButton>
      </FormWrapper>
      {rooms.length > 0 && <TABLE>
        <THEAD>
          <TR>
            <TH>Room Name</TH>
            <TH>Members</TH>
            <TH>Mode</TH>
            <TH></TH>
          </TR>
        </THEAD>
        <TBODY>
          {rooms.map(
            (item, i) =>
              item.room.length > 0 && (
                <TR key={i}>
                  <TD>
                    <strong>
                      {item.room}
                    </strong>
                  </TD>
                  <TD>{item.members}/5</TD>
                  <TD>{item.mode}</TD>
                  <TD><JoinButton onClick={() => window.location = `http://localhost:3000/#${item.room}[${playerState.username}]`}>Join</JoinButton></TD>
                </TR>
              )
          )}
        </TBODY>
      </TABLE>}
    </RoomWrapper>
  );
};

export default Rooms;
