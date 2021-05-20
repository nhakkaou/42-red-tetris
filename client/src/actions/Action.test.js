import {
  UPDATE_MEMBER,
  START_GAME,
  startgame,
  updatemember,
} from "./roomAction";

describe("actions", () => {
  it("Add New Member", () => {
    const text = { user: "test", score: 0 };
    const expectedAction = {
      type: UPDATE_MEMBER,
      data: text,
    };
    expect(updatemember(text)).toEqual(expectedAction);
  });
  it("change startgame", () => {
    const text = true;
    const expectedAction = {
      type: START_GAME,
      data: text,
    };
    expect(startgame(text)).toEqual(expectedAction);
  });
});
