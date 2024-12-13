const { isRobotBack } = require("../../src/2024/day13/solution");

describe("Day 13 - Is the robot back?", () => {
  test("test 1", () => {
    expect(isRobotBack("R")).toEqual([1, 0]);
  });

  test("test 2", () => {
    expect(isRobotBack("RL")).toEqual(true);
  });

  test("test 3", () => {
    expect(isRobotBack("RLUD")).toEqual(true);
  });

  test("test 4", () => {
    expect(isRobotBack("*RU")).toEqual([2, 1]);
  });

  test("test 5", () => {
    expect(isRobotBack("R*U")).toEqual([1, 2]);
  });

  test("test 6", () => {
    expect(isRobotBack("LLL!R")).toEqual([-4, 0]);
  });

  test("test 7", () => {
    expect(isRobotBack("R?R")).toEqual([1, 0]);
  });

  test("test 8", () => {
    expect(isRobotBack("U?D")).toEqual(true);
  });

  test("test 9", () => {
    expect(isRobotBack("R!L")).toEqual([2, 0]);
  });

  test("test 10", () => {
    expect(isRobotBack("U!D")).toEqual([0, 2]);
  });

  test("test 11", () => {
    expect(isRobotBack("R?L")).toEqual(true);
  });

  test("test 12", () => {
    expect(isRobotBack("U?U")).toEqual([0, 1]);
  });

  test("test 13", () => {
    expect(isRobotBack("*U?U")).toEqual([0, 2]);
  });

  test("test 14", () => {
    expect(isRobotBack("U?D?U")).toEqual(true);
  });
});
