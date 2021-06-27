// import App from "./App";
// import { render, fireEvent } from "@testing-library/react";
// import store from "./Store";
// import { Provider } from "react-redux";
// import * as reactRedux from "react-redux";
// import AddName from "./Components/AddName";

// describe("test suite", () => {
//   const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
//   const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

//   beforeEach(() => {
//     useSelectorMock.mockClear();
//     useDispatchMock.mockClear();
//   });

//   test("App render test addname", () => {
//     let StateA = useSelectorMock.mockReturnValue({
//       State: {
//         player: { username: "" },
//         room: { name: "" },
//       },
//     });
//     let MockState = StateA();
//     const { getByText } = render(
//       <Provider store={MockState}>
//         <App />
//       </Provider>
//     );
//     const button = getByText("Red Tetris");
//     const AddName = getByText("AddName");
//     fireEvent.click(button);
//   });
// });

import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "./App";

const mockStore = configureMockStore([thunk]);

describe("App", () => {
  test("should render AddName component if username is not yet set", () => {
    const store = mockStore({
      player: { username: "" },
      room: { name: "" },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = screen.getByText("Red Tetris");
    fireEvent.click(button);
    expect(screen.getByPlaceholderText(/Enter Username/));
  });
  test("should render Rooms component if username is set", () => {
    const store = mockStore({
      player: { username: "testUser" },
      room: { name: "" },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = screen.getByText("Red Tetris");
    fireEvent.click(button);
    expect(screen.getByPlaceholderText(/Enter Room name/));
  });
  test("should render Tetris component if username and room are set", () => {
    const store = mockStore({
      player: {
        username: "testUser",
        connected: true,
        lost: false,
        admin: true,
        row: 0,
      },
      players: [
        {
          user: "testUser",
          score: 0,
          stage: [],
        },
      ],
      room: {
        name: "testRoom",
        members: 1,
        gameStarted: false,
        mode: "Solo",
        next_piece: [],
        gameOver: false,
      },
    });
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = screen.getByText("Red Tetris");
    fireEvent.click(button);
    expect(screen.getByTestId("styled-tet-wra"));
  });
});
