import React, { useState, useEffect } from "react";
import Stage from "./Stage";
import StartBtn from "./StartBtn";
import Display from "./Display";
import Help from "./Help";
import { S_HEIGHT, checkcollision, Createstage } from "../gameHelper";
import { StyledtetrisWrapper, StyledTetris } from "./styling/StyledTetris";
import { useStage, usePlayer, useInterval, socket } from "../hooks";
import { useGameStatus } from "../hooks/useGameStatus";
import url from "../img/tetriminos.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GameOver from "./GameOver";
import { faVolumeOff, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PLAYER } from "../actions/plyersAction";
import { UPDATE_MEMBER, START_GAME, CHANGE_PIECE } from "../actions/roomAction";

const Label = styled.label`
  cursor: pointer;
`;
const Tetris = () => {
  const dispatch = useDispatch();

  let stateTetrominos = useSelector((state) => {
    return state;
  });
  socket.on("connection", (sk) => {});
  socket.on("new member", (result) => {
    console.log("tesststs");
    dispatch({ type: UPDATE_MEMBER, data: stateTetrominos.room.members++ });
    dispatch({ type: ADD_PLAYER, data: { user: result.user, score: 0 } });
  });
  // console.log(stateTetrominos);
  socket.on("disconnect", (socket) => {
    dispatch({ type: CHANGE_PIECE, data: [] });
    console.log("Server Down");
  });
  // socket.on("connection", (sk) => {});
  // socket.on("disconnect", (socket) => {
  //   console.log("Server Down");
  // });
  useEffect(() => {
    if (stateTetrominos.room.next_piece.length <= 1 && 1 == 1) {
      axios.get(`http://localhost:4242/home`).then((res) => {
        const data = [...stateTetrominos.room.next_piece, ...res.data];
        dispatch({ type: CHANGE_PIECE, data: data });
      });
      socket.once("new_tetriminos", (msg) => {
        const data = [...stateTetrominos.room.next_piece, ...msg];
        dispatch({ type: CHANGE_PIECE, data: data });
      });
    }
  }, [stateTetrominos.room.next_piece]);

  const [playing, setPlaying] = useState(true);
  const [audio] = useState(new Audio(url));
  useEffect(() => {
    audio.addEventListener("ended", () => audio.play());
  }, []);

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer(
    setGameOver,
    dispatch,
    stateTetrominos.room.next_piece,
    1
  );

  const [stage, setStage, rowsCleared] = useStage(
    player,
    resetPlayer,
    gameOver
  );

  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared,
    stateTetrominos.room.name,
    stateTetrominos.player.username
  );

  const movePlayer = (dir) => {
    if (!checkcollision(player, stage, { x: dir, y: 0 }))
      updatePlayerPos({ x: dir, y: 0 });
  };

  socket.on("start game", () => {
    alert("START");
    dispatch({ type: START_GAME, data: true });
    audio.play();
    setStage(Createstage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  });
  const startGame = () => {
    dispatch({ type: START_GAME, data: true });
    socket.emit("start game", stateTetrominos.room.name);
    audio.play();
    setStage(Createstage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

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
      // console.log("increment drop time", 1000 / level + 1 * 10);
      // console.log("LEVEL", level);
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
            <GameOver />
          ) : (
            <div>
              <Display text={`Level: ${level}`} />
              <Help />
            </div>
          )}
          {/* {stateTetrominos.player.admin && !stateTetrominos.room.startgame ? ( */}
          <StartBtn callback={startGame} room={stateTetrominos.room.name} />
          {/* ) : (
            ""
          )} */}
        </aside>
      </StyledTetris>
    </StyledtetrisWrapper>
  );
};
export default Tetris;
