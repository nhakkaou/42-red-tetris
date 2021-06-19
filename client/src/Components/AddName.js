import { useState } from "react";
import { toast } from "react-toastify";
import { addPlayerName } from "../actions/playerAction";
import { useDispatch } from "react-redux";
import { StyledButton, StyledInput, StyledAddnameWrapper } from "./styling/StyledForm";

const AddName = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");

  function adduser(e) {
    e.preventDefault();
    if (username.trim() !== "") {
      dispatch(addPlayerName(username.trim()));
    }
    else {
      setUserName("")
      toast.error(
        "[ERROR] Player and Room names must be 1 to 12 alphanumeric characters in length"
      );
    }
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
