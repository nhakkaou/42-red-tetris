import { useState, useCallback } from "react";
import { Tetrominos, randomTetromino } from "../tetrominos";
import { S_WIDTH } from '../gameHelper';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: {
      x: 0,
      y: 0,
    },
    tetromino: Tetrominos[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    const rotatedTetro = matrix.map((_, colIndex) => matrix.map(col => col[colIndex]));
    if(dir > 0)
      return rotatedTetro.map(row => row.reverse());
    return rotatedTetro.reverse();
  }

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino);
    setPlayer(clonedPlayer);
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x + x), y: (prev.pos.y + y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: S_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
