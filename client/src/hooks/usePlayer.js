import { useState, useCallback } from "react";
import { Tetrominos, randomTetromino } from "../tetrominos";
import { S_WIDTH, checkcollision } from "../gameHelper";

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
    const rotatedTetro = matrix.map((_, colIndex) =>
      matrix.map((col) => col[colIndex])
    );
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (stage, dir) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkcollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -1 * offset - (offset > 0 ? 1 : -1);
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
      collided,
    }));
  };

  const resetPlayer = useCallback((stage) => {
    let sym = 0;
    if (!stage)
      setPlayer({
        pos: { x: S_WIDTH / 2 - 1, y: 0 },
        tetromino: randomTetromino().shape,
        collided: false,
      });
    else {
      for (let i = 0; i < stage[0].length; i++) {
        if (stage[0][i][1] == "merged") sym = 1;
      }
      if (sym == 0)
        setPlayer({
          pos: { x: S_WIDTH / 2 - 1, y: 0 },
          tetromino: randomTetromino().shape,
          collided: false,
        });
    }
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate];
};
