import { socket } from "../hooks/index";
import { UPDATE_NAME } from "../actions/roomAction";
import { toast } from 'react-toastify';

export const stethoscope = (dispatch) => {
    window.onhashchange = () => {
        toast.dark("Hash changed a shriiif!")
        //handleHash(dispatch);
    }

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

    socket.on("TOASTIFY", data => {
        switch (data.type) {
            case "error":
                toast.error(data.message)
                break;
            case "success":
                toast.success(data.message)
                break;
            default:
                toast.error(data.message)
                break;
        }
    })
}
