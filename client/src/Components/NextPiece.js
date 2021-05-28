import React from "react";
import { Tetrominos } from "../tetrominos";
import { Styledisplay, StyledTitle, StyleStage, StyledCell } from "./styling/StyledDisplay";

const NextPiece = ({ stage, nextPiece }) => (
  <Styledisplay className="next-piece-wrapper">
    <StyledTitle>Next</StyledTitle>
    <StyleStage width="4" height="3" className="next-piece">
      {stage && nextPiece.length > 0 && stage?.map((row, i) =>
        row.map((cell, x) => <StyledCell key={x} type={cell[0]} color={Tetrominos[cell[0]]?.color} />)
      )}
    </StyleStage>
  </Styledisplay>
);
export default NextPiece;
