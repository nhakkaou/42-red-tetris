import React from "react"

import Stage from "./stage"
import Start from "./start"
import Cell from "./Cell"
import  Display from "./display"
import { Createstage } from "../gameHelper"
const tetris = () => {
    return (
        <div>
            <Stage stage={Createstage()}/>
            <aside>
                <div>
                    <Display text="Score"/>
                    <Display text="Level"/>
                    <Display text="hta nzid fih chi haja"/>
                </div>
                <Start/>
            </aside>
        </div>
    ) 
}
export default tetris;