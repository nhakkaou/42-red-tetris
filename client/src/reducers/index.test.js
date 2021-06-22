import combinedReducer from "./index"

test("Combine Reducers", () => {
    console.log(combinedReducer); 
    expect(combinedReducer).toHaveProperty("player", "players", "room")
})