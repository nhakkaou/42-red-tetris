import React from "react"
import { tetriminos } from "../tetrimino"
import {Stylecell} from "./styledComponents/StyledCell"

const Cell = ({type}) => (
    <Stylecell type={type} color={tetriminos['0'].color}></Stylecell>
)

export default Cell;