import React from "react"
import { Tetrominos } from "../tetrominos"
import {StyledCell} from "./styling/StyledCell"

const Cell = ({type}) => (
    <StyledCell type={type} color={Tetrominos[type].color}></StyledCell>
)

export default React.memo(Cell);