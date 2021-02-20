import { useState } from 'react'
import {randomTetromino} from '../tetrominos'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {
            x: 0,
            y: 0
        },
        tetromino: randomTetromino(),
        collided: false,
    })
    console.log(randomTetromino())
    return [player];
}