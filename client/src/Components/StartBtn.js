import React from "react";
import { StyledStartBtn } from "./styling/StyledStartBtn";
import { socket } from "../hooks";

const StartBtn = ({ callback, restart }) => (
  <StyledStartBtn onClick={callback} className="start-btn">{restart ? 'Restart Game' : 'Start Game'}</StyledStartBtn>
);

export default StartBtn;
