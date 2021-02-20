import React, { useState } from "react"
import Stage from "./Stage"
import StartBtn from "./StartBtn"
import Display from "./Display"
import Help from "./Help"
import { StyletetrisWrapper, StyleTetris } from "./styling/StyledTetris"
import { useStage } from '../hooks/useStage'
import { usePlayer } from '../hooks/usePlayer'


const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);
    return (
        <StyletetrisWrapper>
            <StyleTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? <Display gameOver={gameOver} text="Game Over"/> : (
                        <div>
                            <Display text="Score" />
                            <Display text="Level" />
                            <Help />
                            <StartBtn />
                        </div>
                    )}
                </aside>
            </StyleTetris>
        </StyletetrisWrapper>

    )
}
export default Tetris;