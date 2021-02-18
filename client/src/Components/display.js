import React from "react"
import {Styledisplay} from "./style-Component/style-Display"
const Display = ({gameover, text}) => (
<Styledisplay gameOver={gameover}>{text}</Styledisplay>
)

export default Display;