import React from "react";
import Cell from "./Cell";
import { StyleStage } from "./styling/StyledStage";
import GameOver from "./GameOver";

const Stage = ({ stage, gameOver, player }) => {
  if (!stage) {
    return <span>Loading...</span>;
  }
  return (
    <StyleStage width={stage[0].length} height={stage.length}>
      {gameOver && <GameOver {...{ player }} />}
      {stage.map((row, i) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StyleStage>
  );
};

export default Stage;
