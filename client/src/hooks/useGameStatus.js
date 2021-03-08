import { useState, useEffect, useCallback } from "react";
import url from "../img/pop.mp3";

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
  const [audio2] = useState(new Audio(url));
  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
      audio2.play();
    }
  }, [level, linePoints, rowsCleared]);
  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);
  return [score, setScore, rows, setRows, level, setLevel];
};
