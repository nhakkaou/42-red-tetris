import { combineReducers } from "redux";
import playerReducer from "./playerReducer";

const combinedReducer = combineReducers({
  player: playerReducer,
});
export default combinedReducer;
