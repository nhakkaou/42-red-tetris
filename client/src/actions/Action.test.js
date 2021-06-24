import {
  UPDATE_MEMBER,
  START_GAME,
  startgame,
  updatemember,
} from "./roomAction";
import {ADD_PLAYER_NAME, updateplayer, UPDATE_PLAYER, addPlayerName} from "./playerAction"
describe("actions Rooms", () => {
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

describe("actions Player", () => {
  it("Add Player Name", () => {
    const text = { user: "test", score: 0 };
    const expectedAction = {
      type: ADD_PLAYER_NAME,
      data: text,
    };
    expect(addPlayerName(text)).toEqual(expectedAction);
  });
  it("Update Player Name", () => {
    const text = { user: "test", score: 0 };
    const expectedAction = {
      type: UPDATE_PLAYER,
      data: text,
    };
    expect(updateplayer(text)).toEqual(expectedAction);
  });
});