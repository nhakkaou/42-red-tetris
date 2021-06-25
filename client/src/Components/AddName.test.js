import renderer from "react-test-renderer";
import AddName from "./AddName";
import store from "../Store";
import { Provider } from "react-redux";
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
test("Add Name Mock ", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AddName />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});