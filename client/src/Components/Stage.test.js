import renderer from "react-test-renderer";
import Stage from "./Stage";
import { Createstage } from "../gameHelper";

let stage = Createstage(12, 20)

test("Stage render test GameOver ", () => {
  const tree = renderer.create(<Stage gameOver={true}  stage={stage}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
test("Stage render test Stage", () => {
  const tree = renderer.create(<Stage />).toJSON();
  expect(tree).toMatchSnapshot();
});