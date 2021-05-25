import {socket} from "./hooks"

describe("Server Test ", () => {
    test('Start Game', () => {
        socket.emit("start game")
        socket.on("start game", (res) =>
        expect(res.length).toBe(10))
    })
    test('should Joinroom', () => {
        socket.emit("joinRoom", {user: "test", room: "ROOM"})
        socket.on("TOASTIFY", (res) => expect(res).toContain("Joined room!"))
    })
    test('New tetriminos', () => {
        socket.emit("new_tetriminos")
        socket.on("new_tetriminos", (res) =>
        expect(res.length).toBe(10))
    })
    test('Stage', () => {
        let tmp = {
            stage: [], user: "TEST7855421", room: "RED___ROOM", players: []
        }
        socket.emit("Stage", {stage: [], user: "TEST7855421", room: "RED___ROOM", players: []})
        socket.on("Stage", (res) =>
        expect(res).toBe(tmp))
    })
});