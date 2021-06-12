import { useState } from "react";
import { addPlayerName } from "../actions/playerAction";
import { useDispatch } from "react-redux";
import { StyledButton, StyledInput, StyledAddnameWrapper } from "./styling/StyledForm";

const AddName = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");

  function adduser() {
    dispatch(addPlayerName(username));
  }
  return (
    <StyledAddnameWrapper>
      <StyledInput
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <StyledButton onClick={() => adduser()}>Submit</StyledButton>
    </StyledAddnameWrapper>
  );
};

export default AddName;
