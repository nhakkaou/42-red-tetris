import React from "react";
import { StyledStartBtn } from "./styling/StyledStartBtn";

const StartBtn = ({ callback }) => (
  <StyledStartBtn onClick={callback}>Start the Game</StyledStartBtn>
);

export default StartBtn;
