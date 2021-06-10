import { HashFormat } from "./checkHash";

test("CheckHash", () => {
  expect(HashFormat("")).toBeFalsy();
  expect(HashFormat("#Test")).toBeFalsy();
  expect(HashFormat("Test[]")).toBeFalsy();
  expect(HashFormat("Test[9*/*]")).toBeFalsy();
  expect(HashFormat("test[tester]")).toBeTruthy();
});
