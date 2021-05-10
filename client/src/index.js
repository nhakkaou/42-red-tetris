import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
import { stethoscope } from "./listeners";
import { checkHash } from "./actions/checkHash";

stethoscope(store.dispatch, store.getState);
checkHash();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
