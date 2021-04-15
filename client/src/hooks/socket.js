import io from "socket.io-client";
export const socket = io("http://localhost:4242/", {
  query: {
    usr: localStorage.getItem("Usr"),
  },
});
