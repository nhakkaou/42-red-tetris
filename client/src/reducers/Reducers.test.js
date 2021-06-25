import reducerRoom from "./roomReducer";
import * as actionRoom from "../actions/roomAction";
import reducerPlayer from "./playerReducer";
import * as actionPlayer from "../actions/playerAction";
import reducerPlayers from "./playersReducer";
import * as actionPlayers from "../actions/playersAction";
describe("Room test", () => {
  it("should return the initial state", () => {
    expect(reducerRoom(undefined, {})).toEqual({
      name: "",
      members: 0,
      gameOver: false,
      gameStarted: false,
      mode: "Solo",
      next_piece: [],
    });
  });
  it("Reset state", () => {
    expect(reducerRoom(undefined, { type: "RESET_STATE" })).toEqual({
      name: "",
      members: 0,
      gameStarted: false,
      mode: "Solo",
      next_piece: [],
      gameOver: false,
    });
  });
  it("should return the new state", () => {
    expect(reducerRoom(undefined, { type: actionRoom.START_GAME })).toEqual({
      name: "",
      members: 0,
      gameOver: false,
      gameStarted: true,
      mode: "Solo",
      next_piece: [],
    });
  });

  it("GameOver ", () => {
    expect(reducerRoom(undefined, { type: actionRoom.GAME_OVER })).toEqual({
      name: "",
      members: 0,
      gameStarted: false,
      mode: "Solo",
      next_piece: [],
      gameOver: true,
    });
  });
  it("Clear pieces ", () => {
    expect(reducerRoom(undefined, { type: actionRoom.CLEAR_PIECES })).toEqual({
      name: "",
      members: 0,
      gameStarted: false,
      mode: "Solo",
      next_piece: [],
      gameOver: false,
    });
  });

  it("Join Room name", () => {
    expect(
      reducerRoom(undefined, {
        type: actionRoom.ROOM_JOINED,
        data: { room: "Room101" },
      })
    ).toEqual({
      name: "Room101",
      members: 0,
      gameStarted: false,
      mode: "Solo",
      next_piece: [],
      gameOver: false,
    });
  });

  it("Change Room Mode", () => {
    expect(
      reducerRoom(undefined, {
        type: actionRoom.UPDATE_MODE,
        data: "Multiplayer",
      })
    ).toEqual({
      name: "",
      members: 0,
      gameStarted: false,
      mode: "Multiplayer",
      next_piece: [],
      gameOver: false,
    });
  });
  it("should return the new state new member", () => {
    expect(
      reducerRoom(undefined, { type: actionRoom.UPDATE_MEMBER, data: 6 })
    ).toEqual({
      name: "",
      members: 6,
      gameOver: false,
      gameStarted: false,
      mode: "Solo",
      next_piece: [],
    });
  });
  it("Change piece", () => {
    expect(
      reducerRoom(undefined, {
        type: actionRoom.CHANGE_PIECE,
        data: ["L", "T"],
      })
    ).toEqual({
      name: "",
      members: 0,
      gameOver: false,
      gameStarted: false,
      mode: "Solo",
      next_piece: ["L", "T"],
    });
  });

  it("should return the new state new name", () => {
    expect(
      reducerRoom(undefined, { type: actionRoom.UPDATE_NAME, data: "Test" })
    ).toEqual({
      name: "Test",
      members: 0,
      gameOver: false,
      gameStarted: false,
      mode: "Solo",
      next_piece: [],
    });
  });
});

describe("Player test", () => {
  it("should return the initial state", () => {
    expect(reducerPlayer(undefined, {})).toEqual({
      username: "",
      connected: false,
      lost: false,
      admin: false,
      row: 0,
    });
  });

  it("Add Player Name ", () => {
    expect(
      reducerPlayer(undefined, {
        type: actionPlayer.ADD_PLAYER_NAME,
        data: "TEST",
      })
    ).toEqual({
      username: "TEST",
      connected: false,
      lost: false,
      admin: false,
      row: 0,
    });
  });
  
  it("Test  Start the Game", () => {
    expect(
      reducerPlayer(undefined, { type: actionRoom.START_GAME })
    ).toEqual({
      username: "",
      connected: false,
      lost: false,
      admin: false,
      row: 0,
    });
  });


  it("Switch to true Admin", () => {
    expect(
      reducerPlayer(undefined, { type: actionPlayer.ADMIN_PLAYER })
    ).toEqual({
      username: "",
      connected: false,
      lost: false,
      admin: true,
      row: 0,
    });
  });
  it("Switch to true Lost", () => {
    expect(
      reducerPlayer(undefined, { type: actionPlayer.PLAYER_LOST })
    ).toEqual({
      username: "",
      connected: false,
      lost: true,
      admin: false,
      row: 0,
    });
  });

  it("Add Row", () => {
    expect(
      reducerPlayer(undefined, { type: actionPlayer.SET_ROW, data: 8 })
    ).toEqual({
      username: "",
      connected: false,
      lost: false,
      admin: false,
      row: 8,
    });
  });

  it("Update Player", () => {
    expect(
      reducerPlayer(undefined, {
        type: actionPlayer.UPDATE_PLAYER,
        data: {
          user: "Nour Dine",
          is_admin: true,
        },
      })
    ).toEqual({
      username: "Nour Dine",
      connected: true,
      lost: false,
      admin: true,
      row: 0,
    });
  });
});

describe("Players test", () => {
  it("Update Score", () => {
    expect(
      reducerPlayers([], {
        type: actionPlayers.UPDATE_SCORE,
        data: 1600,
      })
    ).toEqual({
      score: 1600,
    });
  });

  it("Reset State", () => {
    expect(
      reducerPlayers([], {
        type: "RESET_STATE",
      })
    ).toEqual([]);
  });

  it("Update Players", () => {
    expect(
      reducerPlayers([], {
        type: actionPlayers.ADD_PLAYER,
        data: [
          {
            username: "Test",
            score: 54,
          },
        ],
      })
    ).toEqual([
      {
        username: "Test",
        score: 54,
      },
    ]);
  });
});
