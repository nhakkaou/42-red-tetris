import React from "react"
import { tetriminos } from "../tetrimino"
import {Stylecell} from "./style-Component/styleCell"


const Cell = ({type}) => (
    <Stylecell type={type} color={tetriminos['0'].color}></Stylecell>
)

export default Cell;