import styled from "styled-components";
import { useState, useEffect } from "react";
import { socket } from "../hooks";

const JoinRoom = () => {
  const [rooms, setRooms] = useState([]);
  const usr = localStorage.getItem("Usr");
  socket.on("connection", function (socket) { });
  socket.on("disconnect", (socket) => {
    console.log("Server Down");
  });

  useEffect(() => {
    socket.emit("listRoom");
    console.log("tatatat");
  }, []);

  socket.on("listRoom", (rslt) => {
    console.log("rslt");
    console.log(rslt);
    setRooms([...rslt]);
  });

  const [fullWidth, setFullWidth] = useState("true");
  return (
    <div>
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
                    href={`http://localhost:3000/#${item.room}[${usr}]`}
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

export default JoinRoom;
