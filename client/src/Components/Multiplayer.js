import React, { useState, useEffect } from "react";
import Stage from "./Stage";
import Display from "./Display";
import { S_HEIGHT, checkcollision, Createstage, S_WIDTH } from "../gameHelper";
import { StyledtetrisWrapper, StyledTetris } from "./styling/StyledTetris";
import { useStage, usePlayer, useInterval, socket } from "../hooks";
import { useGameStatus } from "../hooks/useGameStatus";
import url from "../img/tetriminos.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeMute,
  faVolumeUp,
  faRedoAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import StagePlayers from "./StagePlayers";
import NextPiece from "./NextPiece";
import { GAME_OVER, START_GAME, CLEAR_PIECES } from "../actions/roomAction";
import { playerLost, PLAYER_LOST } from "../actions/playerAction";
import { Container, Row, Col } from "reactstrap";

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

  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio(url));
  useEffect(() => {
    audio.addEventListener("ended", () => audio.play());
  }, []);

  const [dropTime, setDropTime] = useState(null);

  const [player, NextPlayer, updatePlayerPos, resetPlayer, playerRotate] =
    usePlayer(dispatch, roomState, roomState);

  const [stage, stageNext, setStage, rowsCleared] = useStage(
    player,
    NextPlayer,
    resetPlayer,
    roomState.gameOver,
    playerState.username,
    roomState.name,
    playersState,
    roomState.next_piece
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
    let f = roomState.gameStarted ? 1 : 0;
    let tmp = new Array(10).fill(["P", "merged"]);
    for (let i = 0; i < S_HEIGHT; i++) if (stage[i][0] === ["P", "merged"]) f++;
    while (f > 0) {
      stage.push(tmp);
      stage.shift();
      f--;
    }
  }, [playerState.row]);
  useEffect(() => {
    if (roomState.next_piece.length <= 5 && roomState.gameStarted === true) {
      socket.emit("new_tetriminos", roomState.name);
    }
  }, [roomState.next_piece.length]);

  useEffect(() => {
    if (roomState.gameOver === true) {
      setDropTime(null);
      dispatch(
        playerLost({ user: playerState.username, room: roomState.name })
      );
    }
  }, [roomState.gameOver]);

  useEffect(() => {
    if (roomState.gameStarted === true) {
      setPlaying(true);
      //audio.play();
      setStage(Createstage());
      setDropTime(1000);
      resetPlayer();
      dispatch({ type: START_GAME });
      setScore(0);
      setRows(0);
      setLevel(0);
    }
  }, [roomState.gameStarted]);

  const startGame = () => {
    socket.emit("start game", roomState.name);
  };
  const restartGame = () => {
    dispatch({ type: CLEAR_PIECES });
    socket.emit("start game", roomState.name);
  };
  const drop = () => {
    if (!checkcollision(player, stage, { x: 0, y: 1 }))
      updatePlayerPos({ x: 0, y: 1, collided: false });
    else {
      if (player.pos.y < 1) {
        dispatch({ type: GAME_OVER });
        dispatch({ type: PLAYER_LOST });
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
    if (!roomState.gameOver && keyCode === 40) {
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
    if (!roomState.gameOver) {
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
      <Container>
        <StyledTetris>
          <Row className="w-100">
            <Col
              md={playersState.length > 1 ? 10 : 12}
              sm={12}
              className="flex justify-center red-tetris__col-stage"
            >
              <Stage
                gameOver={roomState.gameOver}
                stage={stage}
                player={playerState}
              />
              <aside>
                <NextPiece nextPiece={roomState.next_piece} stage={stageNext} />
                <Display title={"Score"} data={score} />
                <Display title={"Level"} data={level} />
                <div
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                    padding: "10px 0px 20px",
                  }}
                  className="sound-icon-wrapper"
                >
                  {playerState.admin &&
                    !roomState.gameStarted &&
                    !roomState.gameOver ? (
                    <FontAwesomeIcon
                      onClick={startGame}
                      icon={faPlay}
                      size="2x"
                      className="sound-icon"
                    />
                  ) : (
                    ""
                  )}
                  {playerState.admin && roomState.gameOver ? (
                    <FontAwesomeIcon
                      onClick={restartGame}
                      icon={faRedoAlt}
                      size="2x"
                      className="sound-icon"
                    />
                  ) : (
                    ""
                  )}
                  {playing ? (
                    <FontAwesomeIcon
                      onClick={function () {
                        setPlaying(false);
                        audio.pause();
                      }}
                      icon={faVolumeUp}
                      size="2x"
                      className="sound-icon"
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={function () {
                        setPlaying(true);
                        audio.play();
                      }}
                      icon={faVolumeMute}
                      size="2x"
                      className="sound-icon"
                    />
                  )}
                </div>
              </aside>
            </Col>
            {playersState ? (
              <Col md={2} sm={12}>
                {playersState.map((row, i) => {
                  return row.user !== playerState.username ? (
                    <StagePlayers
                      key={i}
                      stage={
                        row.stage && row.stage.length > 0
                          ? row.stage
                          : Createstage()
                      }
                      user={row.user}
                    />
                  ) : (
                    ""
                  );
                })}
              </Col>
            ) : (
              ""
            )}
          </Row>
        </StyledTetris>
      </Container>
    </StyledtetrisWrapper>
  );
};
export default Tetris;
