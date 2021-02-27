import { useState, useEffect } from "react";
import { Createstage } from "../gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(Createstage());
  const [rowsCleared, setRowsCleared] = useState(0)

  useEffect(() => {

    setRowsCleared(0);
    const sweepRows = newStage => 
      newStage.reduce((ack, row) => {
        if(row.findIndex(cell => cell[0] === 0) === -1){
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateStage = prevStage => {
      //Flush the stage
      const newStage = prevStage.map(row => 
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell)),
      );
      
      //draw tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      if(player.collided){
        resetPlayer();
        return sweepRows(newStage)
      }

      return newStage;
    };
    
    setStage(prev => updateStage(prev));
  }, [player]);

  return [stage, setStage, rowsCleared];
};
