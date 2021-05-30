import { useState } from "react";
import { addPlayerName } from "../actions/playerAction";
import { useDispatch } from "react-redux";
import { StyledButton, StyledInput } from "./styling/StyledForm";

const AddName = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");

  function adduser() {
    dispatch(addPlayerName(username));
  }
  return (
    <div className="App">
      <StyledInput
        placeholder="Create Username"
        onChange={(e) => setUserName(e.target.value)}
      />

      <StyledButton type="submit" onClick={() => adduser()} value="Create" />
    </div>
  );
};

export default AddName;
