import { render } from "@testing-library/react";
import AddName from "./AddName";
import store from "../Store";
import { Provider } from "react-redux";
test("App render test ", () => {
  render(
    <Provider store={store}>
      <AddName />
    </Provider>
  );
});
