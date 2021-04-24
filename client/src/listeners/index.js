import { socket } from "../hooks/index";
import { UPDATE_NAME } from "../actions/roomAction";

export const stethoscope = (dispatch) => {
    socket.on("connection", function (socket) {

    });

    socket.on("disconnect", (socket) => {
        console.log("Server Down");
    });

    socket.on("RoomCreated", (message) => {
        if (message.err) console.warn(message.err)
        else {
            dispatch({ type: UPDATE_NAME, data: message.room });
            window.location.hash = `${message.room}[${message.user}]`;
        }
    });
}
