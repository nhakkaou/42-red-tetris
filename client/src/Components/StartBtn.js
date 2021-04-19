import React from "react";
import { StyledStartBtn } from "./styling/StyledStartBtn";
import { socket } from "../hooks";

const StartBtn = ({ callback }) => (
  <StyledStartBtn onClick={callback}>Start the Game</StyledStartBtn>
);

export default StartBtn;
