import React from "react"
import { Styledisplay, StyledTitle, StyledData } from "./styling/StyledDisplay"

const Display = ({ gameover, title, data }) => (
    <Styledisplay gameOver={gameover} className="display">
        <StyledTitle className="display-title">{title}</StyledTitle>
        <StyledData className="display-data">{data}</StyledData>
    </Styledisplay>
)

export default Display;