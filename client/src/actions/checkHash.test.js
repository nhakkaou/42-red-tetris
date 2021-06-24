import { HashFormat, checkHash } from "./checkHash";

test("CheckHash Format", () => {
  expect(HashFormat("")).toBeFalsy();
  expect(HashFormat("#Test")).toBeFalsy();
  expect(HashFormat("Test[]")).toBeFalsy();
  expect(HashFormat("Test[9*/*]")).toBeFalsy();
  expect(HashFormat("test[tester]")).toBeTruthy();
});
test("CheckHash", () => {
  expect(checkHash("")).toBeFalsy();
  expect(checkHash("#Test")).toBeFalsy();
  expect(checkHash("Test[]")).toBeFalsy();
  expect(checkHash("Test[9*/*]")).toBeFalsy();
  expect(checkHash("test[tester]")).toBeTruthy();
});