import { socket } from "../hooks/index";
import { ROOM_JOINED } from "../actions/roomAction";
import { toast } from 'react-toastify';
import { checkHash } from "../actions/checkHash";
import { UPDATE_PLAYER } from "../actions/playerAction";

export const stethoscope = (dispatch) => {
    window.onhashchange = () => {
        checkHash();
    }

    socket.on("connection", function (socket) {

    });
    socket.on("start game", () => console.log("SALAAAAAM"))

    socket.on("disconnect", (socket) => {
        console.log("Server Down");
    });

    socket.on("Join_success", (data) => {
        dispatch({ type: UPDATE_PLAYER, data });
        dispatch({ type: ROOM_JOINED, data });
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
