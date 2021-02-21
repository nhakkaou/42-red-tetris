import { useState, useEffect } from "react";
import { Createstage } from "../gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(Createstage());

  useEffect(() => {
    const updateStage = prevStage => {
      //Flush the stage
      const newStage = prevStage.map(row => 
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell)),
      );
      
      //draw tetromino
      console.log(player)
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

      return newStage;
    };
    
    setStage(prev => updateStage(prev));
  }, [player]);

  return [stage, setStage];
};
