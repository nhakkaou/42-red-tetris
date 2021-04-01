import io from "socket.io-client";

export default function () {
  const socket = io("http://localhost:4242/", {
    query: {
      usr: localStorage.getItem("Usr"),
    },
  });
  return socket;
}
