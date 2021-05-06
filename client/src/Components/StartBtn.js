import React from "react";
import { StyledStartBtn } from "./styling/StyledStartBtn";
import { socket } from "../hooks";

const StartBtn = ({ callback, res }) => (
  <StyledStartBtn onClick={callback}>{res ? 'Restart Game' : 'Start the Game'}</StyledStartBtn>
);

export default StartBtn;
