import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import GameOver from "./GameOver";

test("App render test ", () => {
  const tree = renderer.create(<GameOver />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("Player Won ", () => {
  const { findByText, getByTestId } = render(<GameOver player={{lost: false, admin: true}}/>);
  expect(getByTestId("gameOver-Won-img")).toBeTruthy()
  const msg = "You Won"
  expect(findByText(msg)).toBeDefined();
});
test("Player Lost ", () => {
  const { findByText, getByTestId } = render(<GameOver player={{lost: true, admin: true}}/>);
  expect(getByTestId("gameOver-Lost-img")).toBeTruthy()
  const msg = "You lost"
  expect(findByText(msg)).toBeDefined();
});
