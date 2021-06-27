import renderer from "react-test-renderer";
import AddName from "./AddName";
import store from "../Store";
import { Provider } from "react-redux";
import * as reactRedux from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";

describe("AddName", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  beforeEach(() => {
    useDispatchMock.mockClear();
  });
  test("Add Name render test ", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <AddName />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Test form submit with wrong value", () => {
    const { getByPlaceholderText, getByText } = render(<AddName />);
    const usernameInput = getByPlaceholderText(/Enter Username/);

    fireEvent.change(usernameInput, { target: { value: "" } });
    fireEvent.click(getByText(/Submit/));

    const errMsg =
      "[ERROR] Player and Room names must be 1 to 12 alphanumeric characters in length";
    expect(screen.findByText(errMsg)).toBeDefined();
  });

  test("Test form submit with correct value", () => {
    useDispatchMock.mockReturnValue(jest.fn());
    const { getByPlaceholderText, getByText } = render(<AddName />);
    const usernameInput = getByPlaceholderText(/Enter Username/);

    fireEvent.change(usernameInput, { target: { value: "testUser" } });
    fireEvent.click(getByText(/Submit/));
    expect(useDispatchMock).toHaveBeenCalled();
  });
});
