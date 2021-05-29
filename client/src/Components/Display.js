import React from "react"
import { Styledisplay, StyledTitle, StyledData } from "./styling/StyledDisplay"

const Display = ({ gameover, title, data }) => (
    <Styledisplay gameOver={gameover}>
        <StyledTitle>{title}</StyledTitle>
        <StyledData>{data}</StyledData>
    </Styledisplay>
)

export default Display;