import styled from "styled-components";

export const StyleStage = styled.div`
  display: grid;
  grid-template-rows: repeat(20, calc(499px / 10));
  grid-template-columns: repeat(10, calc(1002px / 20));
  grid-gap: 1px;
  border: 4px solid #333;
  background: #111;
  width: 518px;
  height: 1024px;
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(20, calc(299px / 10));
    grid-template-columns: repeat(10, calc(602px / 20));
    width: 320px;
    height: 624px;
  }
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(20, calc(199px / 10));
    grid-template-columns: repeat(10, calc(401px / 20));
    width: 220px;
    height: 424px;
  }
`;