import React from "react";
import { Tetrominos } from "../tetrominos";
import styled from "styled-components";
const StyleStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(10vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  width: 100%;
`;
const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.type === 0 ? 'none' : props.color}, 0.8);
  border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
  border-bottom-color: rgba(${(props) => props.color}, 0.5);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.5);
`;
const Styledisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 10px;
    border-radius: 20px;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-size: 0.8 rem;

`
const StyledTitle = styled.div`
      position: relative;
      top: 0;
      left: 0;
      padding: 0px 10px;
      margin: -20px 0 0 30px;
      background: #333;
`;

const NextPiece = ({ stage }) => (
  <Styledisplay>
    <StyledTitle>Next:</StyledTitle>
    <StyleStage width="4" height="3">
      {stage?.map((row, i) =>
        row.map((cell, x) => <StyledCell key={x} type={cell[0]} color={Tetrominos[cell[0]]?.color} />)
      )}
    </StyleStage>
  </Styledisplay>
);
export default NextPiece;
