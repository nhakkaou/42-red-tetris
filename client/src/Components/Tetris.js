import React from "react"
import { StyletetrisWrapper, StyleTetris } from "./styledComponents/StyledTetris"
import Stage from "./Stage"
import StartBtn from "./StartBtn"
import Cell from "./Cell"
import  Display from "./Display"
import { Createstage } from "../gameHelper"
import Help from "./Help"

const Tetris = () => {
    return (
        <StyletetrisWrapper>
            <StyleTetris>
            <Stage stage={Createstage()}/>
            <aside>
                <div>
                    <Display text="Score"/>
                    <Display text="Level"/>
                    <Help/>
                </div>
                <StartBtn/>
            </aside>
            </StyleTetris>
            </StyletetrisWrapper>
            
    ) 
}
export default Tetris;