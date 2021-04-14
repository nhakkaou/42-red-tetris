import io from "socket.io-client";
export const socket = io("http://10.12.4.15:4242/", {
  query: {
    usr: localStorage.getItem("Usr"),
  },
});
