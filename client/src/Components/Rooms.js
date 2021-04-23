import { useState, useEffect } from "react";
import { socket } from "../hooks";
import { UPDATE_NAME } from "../actions/roomAction";
import { useSelector } from "react-redux";
import { StyledButton, StyledInput } from './styling/StyledForm'
import { useDispatch } from "react-redux";

const Rooms = () => {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);
  const [Room, setRoomname] = useState("");

  let playerState = useSelector((state) => {
    return state.player;
  });

  socket.on("connection", function (socket) { });
  socket.on("disconnect", (socket) => {
    console.log("Server Down");
  });

  function addRoom() {
    dispatch({ type: UPDATE_NAME, data: Room });
    socket.emit("CreateRoom", { name: Room });
    window.location.hash = `${Room}[${playerState.username}]`;
  }

  useEffect(() => {
    socket.emit("listRoom");
  }, []);

  socket.on("listRoom", (rslt) => {
    console.log("rslt");
    console.log(rslt);
    setRooms([...rslt]);
  });

  return (
    <div>
      <StyledInput
        placeholder="Create room"
        onChange={(e) => setRoomname(e.target.value)}
      />
      <StyledButton type="submit" onClick={() => addRoom()} value="Create" />
      <table>
        <tr>
          <th>Room Name</th>
          <th>Members</th>
        </tr>

        {rooms.map((item, i) =>
          item.room.length > 1 ? (
            <tr style={{ margin: "0 auto" }} key={i}>
              <td>
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
              <td>{item.members}/5</td>
            </tr>
          ) : (
              ""
            )
        )}
      </table>
    </div>
  );
};

export default Rooms;
