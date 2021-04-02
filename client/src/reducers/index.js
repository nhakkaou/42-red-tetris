import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import socket from "./socket";

const combinedReducer = combineReducers({
  player: playerReducer,
  sk: socket,
});
export default combinedReducer;
