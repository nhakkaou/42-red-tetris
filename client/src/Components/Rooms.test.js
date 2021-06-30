import renderer from "react-test-renderer";
import Rooms from "./Rooms";
import store from "../Store";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Rooms", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  const res = {
    data: [
      {
        room: "testRoom",
        members: 1,
        mode: "Solo",
      },
    ],
  };

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  test("Rooms render test ", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rooms />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Test form submit with wrong value", () => {
    const store = mockStore({
      player: { username: "testUser" },
    });
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Rooms />
      </Provider>
    );
    const roomInput = getByPlaceholderText(/Enter Room name/);

    fireEvent.change(roomInput, { target: { value: "" } });
    fireEvent.click(getByText(/Submit/));

    const errMsg =
      "[ERROR] Player and Room names must be 1 to 12 alphanumeric characters in length";
    expect(screen.findByText(errMsg)).toBeDefined();
  });

  test("Test form submit with correct value", () => {
    const store = mockStore({
      player: { username: "testUser" },
    });
    useDispatchMock.mockReturnValue(jest.fn());
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Rooms />
      </Provider>
    );
    const roomInput = getByPlaceholderText(/Enter Room name/);

    fireEvent.change(roomInput, { target: { value: "testRoom" } });
    fireEvent.click(getByText(/Submit/));
    expect(useDispatchMock).toHaveBeenCalled();
    global.window = Object.create(window);
    const url = "#testRoom[testUser]";
    Object.defineProperty(window, "location", {
      value: {
        hash: url,
      },
    });
    expect(window.location.hash).toEqual(url);
  });
  
});
