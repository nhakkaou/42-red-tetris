import React from "react"
import { StyletetrisWrapper, StyleTetris } from "./styledComponents/StyledTetris"
import Stage from "./Stage"
import Start from "./Start"
import Cell from "./Cell"
import  Display from "./Display"
import { Createstage } from "../gameHelper"
import Help from "./Help"
const tetris = () => {
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
                <Start/>
            </aside>
            </StyleTetris>
            </StyletetrisWrapper>
            
    ) 
}
export default tetris;