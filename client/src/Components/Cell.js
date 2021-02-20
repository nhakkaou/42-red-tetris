import React from "react"
import { Tetrominos } from "../tetrominos"
import {Stylecell} from "./styling/StyledCell"

const Cell = ({type}) => (
    <Stylecell type={type} color={Tetrominos[type].color}></Stylecell>
)

export default Cell;