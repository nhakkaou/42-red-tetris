import renderer from "react-test-renderer";
import StartBtn from "./StartBtn";

test("StartBtn render test ", () => {
  const tree = renderer.create(<StartBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});
