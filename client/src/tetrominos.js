export const Tetrominos = {
    0: {
        shape: [[0]], color: '0, 0, 0'
    },
    I: {
        shape: [
            [0, '#', 0, 0],
            [0, '#', 0, 0],
            [0, '#', 0, 0],
            [0, '#', 0, 0],
        ],
        color: '204, 0, 0',
    },
    J: {
        shape: [
            [0, '#', 0],
            [0, '#', 0],
            ['#', '#', 0]
        ],
        color: '102, 255, 102',
    },
    L: {
        shape: [
            [0, '#', 0],
            [0, '#', 0],
            [0, '#', '#']
        ],
        color: '102, 255, 102',
    },
    S: {
        shape: [
            [0, '#', '#'],
            ['#', '#', 0],
            [0, 0, 0]
        ],
        color: '153, 102, 255',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['#', '#', '#'],
            [0, '#', 0]
        ],
        color: '255, 140, 102',
    },
    Z: {
        shape: [
            ['#', '#', 0],
            [0, '#', '#']
            [0, 0, 0],
        ],
        color: '153, 102, 255',
    },
    
}

export const randomTetromino = () => {
    const tetrominoStr = "IJLTSZ";
    const randomTetro = tetrominoStr[Math.floor(Math.random() * tetrominoStr.length)];
    return Tetrominos[randomTetro];
}