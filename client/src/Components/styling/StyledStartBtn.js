import styled from "styled-components"

export const StyledStartBtn = styled.button`
    text-align: center;
    background-color: #7C23B6;
    color: white;
    box-sizing: border-box;
    display: flex;
    margin: 0;
    padding: 2px;
    border: 4px solid ;
    min-height: 30px;
    font-family: 'Hanalei', cursive;
    font-size: 20px;
    padding: 5px;
    letter-spacing: 2px;
    font-weight: bolder;
    outline: none;
    :hover{
        background-color: #c79dcb;
        color: #1d0424;
    }
    @media screen and (max-width: 768px) {
        width: 100px;
    }
    @media screen and (max-width: 480px) {
        width: 90px;
    }
`