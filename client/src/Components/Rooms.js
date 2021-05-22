import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { StyledButton, StyledInput } from "./styling/StyledForm";
import { useDispatch } from "react-redux";

const Rooms = () => {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);
  const [Room, setRoomname] = useState("");

  let playerState = useSelector((state) => {
    return state.player;
  });

  function addRoom() {
    //dispatch(createRoom(playerState.username, Room));
    window.location.hash = `${Room}[${playerState.username}]`;
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
      <StyledButton type="submit" onClick={() => addRoom()} value="Create" />
      <table>
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
