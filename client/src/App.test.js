import App from "./App";
import { render, screen } from "@testing-library/react";
import store from "./Store";
import { Provider } from "react-redux";

test("App render test ", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
