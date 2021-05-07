import React, { useState, useEffect } from "react";
import Stage from "./Stage";
import StartBtn from "./StartBtn";
import Display from "./Display";
import Help from "./Help";
import { S_WIDTH, S_HEIGHT, checkcollision, Createstage } from "../gameHelper";
import { StyledtetrisWrapper, StyledTetris } from "./styling/StyledTetris";
import { useStage, usePlayer, useInterval, socket } from "../hooks";
import { useGameStatus } from "../hooks/useGameStatus";
import url from "../img/tetriminos.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameOver from "./GameOver";
import { faVolumeOff, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PLAYER } from "../actions/playersAction";

import NextPiece from "./NextPiece";
const Label = styled.label`
  cursor: pointer;
`;
const Tetris = () => {
  const dispatch = useDispatch();
  let playerState = useSelector((state) => {
    return state.player;
  });
  let roomState = useSelector((state) => {
    return state.room;
  });
  let playersState = useSelector((state) => {
    return state.players;
  });

  const [playing, setPlaying] = useState(true);
  const [audio] = useState(new Audio(url));
  useEffect(() => {
    audio.addEventListener("ended", () => audio.play());
  }, []);

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [
    player,
    NextPlayer,
    updatePlayerPos,
    resetPlayer,
    playerRotate,
  ] = usePlayer(dispatch, setGameOver, roomState, playerState);

  const [stage, stageNext, setStage, rowsCleared] = useStage(
    player,
    NextPlayer,
    resetPlayer,
    gameOver
  );

  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared,
    roomState.name,
    playerState.username
  );

  const movePlayer = (dir) => {
    if (!checkcollision(player, stage, { x: dir, y: 0 }))
      updatePlayerPos({ x: dir, y: 0 });
  };

  useEffect(() => {
    if (roomState.next_piece.length <= 5 && roomState.startgame === true) {
      socket.emit("new_tetriminos", roomState.name);
    }
  }, [roomState.next_piece.length]);

  useEffect(() => {
    let f = 1;
    let c = stage.map((row) => row.map((cell) => (cell[0] === "P" ? f++ : f)));
    let tmp = Createstage();
    if (f > 0)
      for (let i = S_HEIGHT - 1; i >= 0; i--) {
        for (let j = 0; j < S_WIDTH; j++) {
          tmp[i][j] = ["P", "merged"];
        }
        f--;
        if (f == 0) break;
      }

    setStage(tmp);
  }, [score]);

  useEffect(() => {
    if (roomState.startgame === true) {
      //audio.play();
      setStage(Createstage());
      setDropTime(1000);
      resetPlayer();
      setGameOver(false);
      setScore(0);
      setRows(0);
      setLevel(0);
    }
  }, [roomState.startgame]);

  const startGame = () => {
    socket.emit("start game", roomState.name);
  };
  useEffect(() => {
    if (gameOver) {
      socket.emit("Loser", {
        user: playerState.username,
        room: roomState.name,
      });
    }
  }, [gameOver]);
  const drop = () => {
    if (!checkcollision(player, stage, { x: 0, y: 1 }))
      updatePlayerPos({ x: 0, y: 1, collided: false });
    else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
    if (rows > level + 1) {
      setLevel((prev) => prev + 1);

      if (level > 0) setDropTime(1000 / level + 1 * 10);
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver && keyCode === 40) {
      if (level == 0) setDropTime(1000);
      else setDropTime(1000);
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const verticalDrop = () => {
    let tmp = 0;
    for (let i = 0; i < S_HEIGHT; i++) {
      if (checkcollision(player, stage, { x: 0, y: i })) {
        tmp = i;
        break;
      }
    }
    for (let i = tmp; i > 0; i--) {
      if (!checkcollision(player, stage, { x: 0, y: i })) {
        updatePlayerPos({ x: 0, y: i, collided: false });
        break;
      }
    }
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) movePlayer(-1);
      else if (keyCode === 39) movePlayer(1);
      else if (keyCode === 40) dropPlayer();
      else if (keyCode === 38) {
        if (player.tetromino[0][1] != "D") playerRotate(stage, 1);
      } else if (keyCode === 32) verticalDrop();
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledtetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={move}
      onKeyUp={(event) => {
        event.preventDefault();
        keyUp(event);
      }}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          <NextPiece stage={stageNext} />
          <Label>
            {playing ? (
              <FontAwesomeIcon
                onClick={function () {
                  setPlaying(false);
                  audio.pause();
                }}
                icon={faVolumeUp}
              />
            ) : (
              <FontAwesomeIcon
                onClick={function () {
                  setPlaying(true);
                  audio.play();
                }}
                icon={faVolumeOff}
              />
            )}
          </Label>
          <Display text={`Score: ${score}`} />
          {gameOver ? (
            <GameOver score={score} />
          ) : (
            <div>
              <Display text={`Level: ${level}`} />
              {/* <Help /> */}
            </div>
          )}
          {playerState.admin && !roomState.startgame ? (
            <StartBtn callback={startGame} room={roomState.name} />
          ) : (
            ""
          )}
        </aside>
      </StyledTetris>
    </StyledtetrisWrapper>
  );
};
export default Tetris;
