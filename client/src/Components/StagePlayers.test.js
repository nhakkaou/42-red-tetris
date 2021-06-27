import renderer from "react-test-renderer";
import StagePlayers from "./StagePlayers";
import { render, waitFor } from "@testing-library/react";
import { Createstage } from "../gameHelper";

test("StagePlayers render test ", () => {
  const tree = renderer.create(<StagePlayers />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("StagePlayers loading test", async () => {
  const { findByText } = render(<StagePlayers stage={null} />);
  await waitFor(() => {
    expect(findByText("Loading...")).toBeDefined();
  });
});
test("StagePlayers stage is set test username", async () => {
  const testUser = "testUser";
  const testScore = "500";
  const { findByText } = render(
    <StagePlayers stage={Createstage()} user={testUser} />
  );
  await waitFor(() => {
    expect(findByText("testUser")).toBeDefined();
  });
});
test("StagePlayers stage is set test specters", async () => {
  const { getByTestId } = render(<StagePlayers stage={[[[0, "clear"]]]} />);
  await waitFor(() => {
    expect(getByTestId("stagePColE-0")).toBeTruthy();
  });
});
test("StagePlayers stage is set test specters piece collided", async () => {
  const { getByTestId } = render(<StagePlayers stage={[[["T", "clear"]]]} />);
  await waitFor(() => {
    expect(getByTestId("stagePColF-0")).toBeTruthy();
  });
});
