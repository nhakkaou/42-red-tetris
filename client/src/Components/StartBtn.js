import React from "react";
import { StyledStartBtn } from "./styling/StyledStartBtn";
import { socket } from "../hooks";

const StartBtn = ({ callback, restart }) => (
  <StyledStartBtn onClick={callback}>{restart ? 'Restart Game' : 'Start the Game'}</StyledStartBtn>
);

export default StartBtn;
