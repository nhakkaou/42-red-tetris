import renderer from "react-test-renderer";
import NextPiece from "./NextPiece";

test("NextPiece render test ", () => {
  const tree = renderer.create(<NextPiece />).toJSON();
  expect(tree).toMatchSnapshot();
});
