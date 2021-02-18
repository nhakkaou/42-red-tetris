import React from "react"
import { StyletetrisWrapper, StyleTetris } from "./style-Component/style-tetris"
import Stage from "./stage"
import Start from "./start"
import Cell from "./Cell"
import  Display from "./display"
import { Createstage } from "../gameHelper"
const tetris = () => {
    return (
        <StyletetrisWrapper>
            <StyleTetris>
            <Stage stage={Createstage()}/>
            <aside>
                <div>
                    <Display text="Score"/>
                    <Display text="Level"/>
                    <Display text="hta nzid fih chi haja"/>
                </div>
                <Start/>
            </aside>
            </StyleTetris>
            </StyletetrisWrapper>
            
    ) 
}
export default tetris;