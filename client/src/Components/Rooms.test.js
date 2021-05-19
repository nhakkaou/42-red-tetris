import { render } from "@testing-library/react";
import Rooms from "./Rooms";
import store from "../Store";
import { Provider } from "react-redux";

test("Rooms render test ", () => {
  render(
    <Provider store={store}>
      <Rooms />
    </Provider>
  );
});
