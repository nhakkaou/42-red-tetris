import store from "../Store";
test("Combine Reducers", () => {
    
    expect(store.getState()).toHaveProperty("player", "players", "room")
})