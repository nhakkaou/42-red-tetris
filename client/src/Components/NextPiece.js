import React from "react";
import { Tetrominos } from "../tetrominos";
import { StyledNextDisplay, StyledTitle, StyleStage, StyledCell } from "./styling/StyledDisplay";

const NextPiece = ({ stage, nextPiece }) => (
  <StyledNextDisplay>
    <StyledTitle>Next</StyledTitle>
    <StyleStage>
      {stage && nextPiece.length > 0 && stage?.map((row, i) =>
        row.map((cell, x) => <StyledCell key={x} type={cell[0]} color={Tetrominos[cell[0]]?.color} />)
      )}
    </StyleStage>
  </StyledNextDisplay>
);
export default NextPiece;
