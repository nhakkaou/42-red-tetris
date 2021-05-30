import React from "react";
import url from "../img/tenor.gif";
import url1 from "../img/README.gif";
import { StyledOverlay, StyledOverlayText } from "./styling/StyledStage";

export default function GameOver({ player }) {
  return (
    <StyledOverlay>
      <StyledOverlayText>
        <h1>{player?.lost === true ? "You lost" : "You Won"}</h1>
        {player?.lost === true ? (
          <img src={url} />
        ) : (
          <img style={{ width: "50%" }} src={url1} />
        )}
        <p>{player?.admin === true ? "Click on ⟳ to restart the game" : "Wait for host player to restart the game"}</p>
      </StyledOverlayText>
    </StyledOverlay>
  );
}
