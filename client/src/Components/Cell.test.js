import renderer from "react-test-renderer";
import Cell from "./Cell";

test("App render test ", () => {
  const tree = renderer.create(<Cell />).toJSON();
  expect(tree).toMatchSnapshot();
});
