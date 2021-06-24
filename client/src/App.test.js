import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import store from "./Store";
import { Provider } from "react-redux";

test("App render test ", () => {
  const {getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const button = getByText("Red Tetris");
  fireEvent.click(button)
});
