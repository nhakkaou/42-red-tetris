import React from "react"
import Cell from "./Cell"
import { StyleStage} from "./styling/StyledStage"

const Stage = ({stage}) => (
    <StyleStage width={stage[0].length} height={stage.length}>
        {
        stage.map(
            row => row.map(
                (cell, x) => <Cell key={x} type={cell[0]}/>
            )
        )}
    </StyleStage>
)

export default Stage;