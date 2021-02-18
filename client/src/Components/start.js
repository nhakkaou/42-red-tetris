import React from "react"
import styled from "styled-components"
const Buttona = styled.button`
    text-align: center;
    background-color: #7C23B6;
    color: white;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    border-radius: 20px;
    border: 4px solid ;
    min-height: 30px;
    font-family: 'Hanalei', cursive;
    font-size: 20px;
    padding: 5px;
    letter-spacing: 2px;
    font-weight: bolder;
    :hover{
        background-color: #c79dcb;
        color: #1d0424;
    } 
`
const Start = ({callback}) => (
    <Buttona>Start the Game</Buttona>
)

export default Start;