import React from "react"
import {Styledisplay} from "./styledComponents/StyledDisplay"

const Display = ({gameover, text}) => (
<Styledisplay gameOver={gameover}>{text}</Styledisplay>
)

export default Display;