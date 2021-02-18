export const tetriminos = {
    0: {
        shape: [[0]], color: '0, 0, 0'
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: '204, 0, 0',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '102, 255, 102',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '102, 255, 102',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '153, 102, 255',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '255, 140, 102',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z']
            [0, 0, 0],
        ],
        color: '153, 102, 255',
    },
    
}

export const randtetri = () => {
    const str = "IJLOTSZ"
    const rndtr = tetriminos[Math.floor(Math.random * tetriminos.length)]
    return(tetriminos[rndtr]);
}