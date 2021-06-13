import renderer from "react-test-renderer";
import StagePlayers from "./StagePlayers";

test("App render test ", () => {
  const tree = renderer.create(<StagePlayers />).toJSON();
  expect(tree).toMatchSnapshot();
});
