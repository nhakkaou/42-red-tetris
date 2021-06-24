import Display from "./Display";
import renderer from "react-test-renderer";
test("Display render test ", () => {
  const tree = renderer.create(<Display />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("Display render test title ", () => {
  const tree = renderer.create(<Display title="test" gameover={true}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Display render title and data ", () => {
  const tree = renderer.create(<Display title="test" data="0" />).toJSON();
  expect(tree).toMatchSnapshot();
});