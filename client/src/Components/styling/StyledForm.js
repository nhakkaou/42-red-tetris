import styled from "styled-components"

export const StyledInput = styled.input`
box-sizing: border-box;
display: flex;
align-items: center;
margin: 50px auto;
padding: 20px;
border-radius: 20px;
border: 4px solid #333;
min-height: 30px;
width: 30%;
color: #ffffff;
background: #000;
font-size: 1.8 rem;
`;

export const StyledButton = styled.input`
box-sizing: border-box;
display: flex;
justify-content: center;
margin: 50px auto;
padding: 20px;
border-radius: 20px;
border: 4px solid #333;
min-height: 30px;
width: auto;
color: #ffffff;
background: #000;
font-size: 16px;
cursor: pointer;
:hover {
  background: #333;
  .test {
    display: none;
  }
}
`;