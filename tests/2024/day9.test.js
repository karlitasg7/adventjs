const { moveTrain } = require("../../src/2024/day9/solution");

describe("Day 09 - The magic train", () => {
  test("test 1", () => {
    expect(
      moveTrain(["·····", "*····", "@····", "o····", "o····"], "U")
    ).toEqual("eat");
  });

  test("test 2", () => {
    expect(
      moveTrain(["·····", "*····", "@····", "o····", "o····"], "D")
    ).toEqual("crash");
  });

  test("test 3", () => {
    expect(
      moveTrain(["·····", "*····", "@····", "o····", "o····"], "L")
    ).toEqual("crash");
  });

  test("test 4", () => {
    expect(
      moveTrain(["·····", "*····", "@····", "o····", "o····"], "R")
    ).toEqual("none");
  });
});
