import { useState, useEffect } from "react";
import { toast } from "react-toastify";
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
    if (Room.trim() !== "") {
      window.location.hash = `${Room.trim()}[${playerState.username}]`;
      dispatch({ type: UPDATE_MODE, data: mode });
    }
    else {
      setRoomname("")
      toast.error(
        "[ERROR] Player and Room names must be 1 to 12 alphanumeric characters in length"
      );
    }

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
            placeholder="Enter Room name"
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
                  <TD><JoinButton onClick={() => window.location = `${process.env.REACT_APP_FRONTEND_URL}/#${item.room}[${playerState.username}]`}>Join</JoinButton></TD>
                </TR>
              )
          )}
        </TBODY>
      </TABLE>}
    </RoomWrapper>
  );
};

export default Rooms;
