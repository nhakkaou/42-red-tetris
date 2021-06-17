import { useState } from "react";
import { addPlayerName } from "../actions/playerAction";
import { useDispatch } from "react-redux";
import { StyledButton, StyledInput, StyledAddnameWrapper } from "./styling/StyledForm";

const AddName = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");

  function adduser(e) {
    e.preventDefault();
    dispatch(addPlayerName(username));
  }
  return (
    <StyledAddnameWrapper onSubmit={(e) => adduser(e)}>
      <StyledInput
        placeholder="Enter Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <StyledButton>Submit</StyledButton>
    </StyledAddnameWrapper>
  );
};

export default AddName;
