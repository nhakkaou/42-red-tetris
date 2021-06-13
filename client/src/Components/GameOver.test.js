import renderer from "react-test-renderer";
import GameOver from "./GameOver";

test("App render test ", () => {
  const tree = renderer.create(<GameOver />).toJSON();
  expect(tree).toMatchSnapshot();
});
