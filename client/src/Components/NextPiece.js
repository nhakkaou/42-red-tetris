import React from "react";
import Cell from "./Cell";
import styled from "styled-components";
const StyleStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(10vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  width: 50%;
`;
const NextPiece = ({ stage }) => (
  <StyleStage width="4" height="4">
    {stage.map((row, i) =>
      row.map((cell, x) => <Cell key={x} type={cell[0]} />)
    )}
  </StyleStage>
);
export default NextPiece;
