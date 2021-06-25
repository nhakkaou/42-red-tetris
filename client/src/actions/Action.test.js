import {
  UPDATE_MEMBER,
  START_GAME,
  startgame,
  updatemember,
  updatename,
  nextpiece,
  UPDATE_NAME,
  CHANGE_PIECE
} from "./roomAction";
import {ADD_PLAYER_NAME, updateplayer, UPDATE_PLAYER, addPlayerName, playerLost} from "./playerAction"
import {UPDATE_SCORE, ADD_PLAYER, updatescore, addplayer} from "./playersAction"
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
  it("change Pieces", () => {
    const text = [];
    const expectedAction = {
      type: CHANGE_PIECE,
      data: text,
    };
    expect(nextpiece(text)).toEqual(expectedAction);
  });
  it("change Room name", () => {
    const text = "test";
    const expectedAction = {
      type: UPDATE_NAME,
      data: text,
    };
    expect(updatename(text)).toEqual(expectedAction);
  });
});

describe("Actions Player", () => {
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
  // it.only("Lost player", () => {
  //   const text = { user: "test", score: 0 };
  //   const expectedAction = {
  //     type: UPDATE_PLAYER,
  //     data: text,
  //   };
    
    
  //   // expect(playerLost(text)).toEqual(expectedAction);
  // });
});

describe("Actions Players", () => {
  it("Add Player Players", () => {
    const data = { user: "test", score: 0, stage: [] };
    const expectedAction = {
      type: ADD_PLAYER,
      data: data,
    };
    expect(addplayer(data)).toEqual(expectedAction);
  });
  it("Add Player Players", () => {
    const data = { user: "test", score: 0, stage: [] };
    const expectedAction = {
      type: UPDATE_SCORE,
      data: data,
    };
    expect(updatescore(data)).toEqual(expectedAction);
  });
})