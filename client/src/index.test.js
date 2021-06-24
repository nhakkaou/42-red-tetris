import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./Store";
import { Provider } from "react-redux";


jest.mock("react-dom", () => ({ render: jest.fn() }))
test("renders with App and root div", () => {

  const root = document.createElement("div")
  root.id = "root"
  document.body.appendChild(root)

  // Requires index.js so that react-dom render method is called
  require("./index.js")

  // Asserts render was called with <App />
  // and HTML element with id = root
  expect(ReactDOM.render).toHaveBeenCalledWith(<Provider store={store}>
    <App />
  </Provider>, root)
})