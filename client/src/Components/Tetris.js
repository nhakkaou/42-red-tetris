import React, { useState } from "react"
import Stage from "./Stage"
import StartBtn from "./StartBtn"
import Display from "./Display"
import Help from "./Help"
import { checkcollision, Createstage } from '../gameHelper'
import { StyledtetrisWrapper, StyledTetris } from "./styling/StyledTetris"
import { useStage, usePlayer, useInterval } from '../hooks'
import { useGameStatus } from '../hooks/useGameStatus'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)
    //console.log('re-render');

    const movePlayer = dir => {
        if (!checkcollision(player, stage, { x: dir, y: 0 }))
            updatePlayerPos({ x: dir, y: 0 })
    }

    const startGame = () => {
        setStage(Createstage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false)
        setScore(0);
        setRows(0)
        setLevel(0);
    }

    const drop = () => {
        if (rows > level + 1 * 10)
        {
            setLevel(prev => prev + 1)
            setDropTime(1000 / level + 1 + 200)
        }
        if (!checkcollision(player, stage, { x: 0, y: 1 }))
            updatePlayerPos({ x: 0, y: 1, collided: false })
        else {
            if (player.pos.y < 1) {
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }

    const keyUp = ({ keyCode }) => {
        if (!gameOver && keyCode === 40) {
            setDropTime(1000 / level + 1 + 200);
        }
    }

    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37)
                movePlayer(-1);
            else if (keyCode === 39)
                movePlayer(1);
            else if (keyCode === 40)
                dropPlayer();
            else if (keyCode === 38)
                playerRotate(stage, 1);
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <StyledtetrisWrapper role="button" tabIndex="0" onKeyDown={move} onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    <Display text={`Score: ${score}`} />
                    {gameOver ? <Display gameOver={gameOver} text="Game Over" /> : (
                        <div>  
                            <Display text={`Level: ${level}`} />
                            <Help />

                        </div>
                    )}
                    <StartBtn callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledtetrisWrapper>

    )
}
export default Tetris;