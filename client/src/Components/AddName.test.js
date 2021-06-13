import renderer from "react-test-renderer";
import AddName from "./AddName";
import store from "../Store";
import { Provider } from "react-redux";
test("App render test ", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AddName />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
