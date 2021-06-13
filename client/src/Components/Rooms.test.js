import renderer from "react-test-renderer";
import Rooms from "./Rooms";
import store from "../Store";
import { Provider } from "react-redux";

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
