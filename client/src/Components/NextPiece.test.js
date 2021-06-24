import renderer from "react-test-renderer";
import NextPiece from "./NextPiece";
import { Createstage } from "../gameHelper";
let stage = Createstage(4, 4)
test("NextPiece render test ", () => {
  const tree = renderer.create(<NextPiece />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("NextPiece render T ", () => {
  const tree = renderer.create(<NextPiece stage={stage} nextPiece="T" />).toJSON();
  expect(tree).toMatchSnapshot();
});