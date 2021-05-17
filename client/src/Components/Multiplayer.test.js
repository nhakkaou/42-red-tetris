import { render } from "@testing-library/react";
import Multiplayer from "./Multiplayer";
import store from "../Store";
import { Provider } from "react-redux";
test("Multiplayer render test ", () => {
  render(
    <Provider store={store}>
      <Multiplayer />
    </Provider>
  );
});
