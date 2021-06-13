import renderer from "react-test-renderer";
import Stage from "./Stage";

test("Stage render test ", () => {
  const tree = renderer.create(<Stage />).toJSON();
  expect(tree).toMatchSnapshot();
});
