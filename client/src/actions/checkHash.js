import { toast } from "react-toastify";
import { socket } from "../hooks";
import store from "../Store";

export const HashFormat = (hash) => {
  const regexp = /(?<room>[a-zA-Z0-9]{1,12})\[(?<usr>[a-zA-Z0-9]{1,12})\]/;
  const found = hash.match(regexp);
  if (!found) {
    toast.error(
      "[ERROR] Player and Room names must be 1 to 12 alphanumeric characters in length"
    );
    return false;
  }
  return true;
};
export const checkHash = () => {
  const hash = window.location.hash.substring(1);
  if (!hash.trim()) return;
  if (HashFormat(hash))
    socket.emit("joinRoom", {
      user: found.groups.usr,
      room: found.groups.room,
      mode: store.getState().room.mode,
    });
};
