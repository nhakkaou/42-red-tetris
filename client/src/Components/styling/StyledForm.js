import styled from "styled-components"

export const StyledInput = styled.input`
padding: 15px;
border-radius: 10px;
border: 4px solid #333;
color: #fff;
background: #000;
margin: 0.5em;
outline: none;
width: 60%;
min-width: 300px;
font-size: 24px;
::placeholder {
  color: #fff;
}
@media screen and (max-width: 768px) {
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  font-size: 16px;
}
`;

export const StyledButton = styled.button`
padding: 12px;
border-radius: 10px;
border: 4px solid #333;
color: #ffffff;
background: #000;
font-size: 24px;
cursor: pointer;
margin: 0.5em;
width: 20%;
min-width: 160px;
:hover {
  background: #333;
}
@media screen and (max-width: 768px) {
  font-size: 18px;
  min-width: 135px;

}
@media screen and (max-width: 480px) {
  font-size: 16px;
  min-width: 135px;

}
`;
export const StyledAddnameWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  position: absolute;
  margin: auto;
  width: 50%;
  padding: 10px;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`

export const RoomWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
top: 30%;
left: 50%;
position: absolute;
transform: translate(-50%, -30%);
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 480px) {
}
`

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin: auto;
padding: 10px;

@media screen and (max-width: 768px) {
}
@media screen and (max-width: 480px) {
}
`

export const InputsWrapper = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
  flex-direction: column;
}
@media screen and (max-width: 480px) {
  flex-direction: column;
}
`

export const StyledSelect = styled.select`
padding: 21px;
border-radius: 10px;
border: 4px solid #333;
color: #fff;
background: #000;
margin: 0.5em;
outline: none;
width: 15%;
min-width: 160px;
font-size: 24px;
@media screen and (max-width: 768px) {
  font-size: 18px;
  width: 95%;
  padding: 15px;
}
@media screen and (max-width: 480px) {
  font-size: 16px;
  width: 80%;
  padding: 15px;
  min-width: 300px;
}
`;

export const TABLE = styled.table`
border-width: 5px;
background: #000;
border-collapse: collapse;
border-spacing: 0;
width: 50%;
border: 1px solid #333;
font-size: 18px;
@media screen and (max-width: 768px) {
  width: 80%;
}
@media screen and (max-width: 480px) {
  width: 100%;
}
`

export const THEAD = styled.thead`
`

export const TBODY = styled.tbody`
`

export const TR = styled.tr`
border-width: 5px;
`
export const TH = styled.th`
`

export const TD = styled.td`
`

export const JoinButton = styled.button`
padding: 12px;
border-radius: 10px;
border: 4px solid #333;
color: #000;
background: #fff;

cursor: pointer;
margin: 0.5em;


:hover {
  background: #333;
  color: #fff;
}

`