import { Tetrominos } from "./tetrominos"

export const S_WIDTH = 12
export const S_HEIGHT = 20

export const Createstage = () =>
    Array.from(Array(S_HEIGHT), () =>
        new Array(S_WIDTH).fill([0, 'clear']))
export const checkcollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino.length; x++) {
            if (player.tetromino[y][x] !== 0) {
                if (!stage[y + player.pos.y + moveY] || !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear')
                    return true;
            }
        }
    }
}