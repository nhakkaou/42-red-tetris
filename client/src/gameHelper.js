export const S_WIDTH = 12
export const S_HEIGHT = 20

export const Createstage = () => 
Array.from( Array (S_HEIGHT), () => 
    new Array (S_WIDTH).fill([0, 'clear'] ))
