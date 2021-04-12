import io from "socket.io-client";
export const socket = io("http://10.12.9.10:4242/", {
  query: {
    usr: localStorage.getItem("Usr"),
  },
});
