import renderer from "react-test-renderer";
import Multiplayer from "./Multiplayer";
import store from "../Store";
import { Provider } from "react-redux";
test("Multiplayer render test ", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Multiplayer />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
