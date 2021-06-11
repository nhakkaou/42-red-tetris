import styled from "styled-components"

export const StyledInput = styled.input`
padding: 20px;
border-radius: 10px;
border: 4px solid #333;
color: #fff;
background: #000;
margin: 0.5em;
outline: none;
width: 80%;
min-width: 135px;
`;

export const StyledButton = styled.button`
padding: 20px;
border-radius: 10px;
border: 4px solid #333;
color: #ffffff;
background: #000;
font-size: 16px;
cursor: pointer;
margin: 0.5em;
width: 20%;
min-width: 100px;
:hover {
  background: #333;
}
`;
export const StyledAddnameWrapper = styled.form`
  /*padding: 20px;*/
  border-radius: 10px;
  border: 4px solid #333;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*top: 40%;
  left: 25%;
  position: absolute;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 70%;
  }*/
  margin: auto;
  width: 50%;
  padding: 10px;
`