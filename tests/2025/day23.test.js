const { minStepsToDeliver } = require("../../src/2025/day23/solution");

describe("Day 23 - Gift route", () => {
  test("test 1", () => {
    expect(
      minStepsToDeliver([
        ["S", ".", "G"],
        [".", "#", "."],
        ["G", ".", "."],
      ])
    ).toEqual(4);
  });

  test("test 2", () => {
    expect(
      minStepsToDeliver([
        ["S", "#", "G"],
        ["#", "#", "."],
        ["G", ".", "."],
      ])
    ).toEqual(-1);
  });

  test("test 3", () => {
    expect(minStepsToDeliver([["S", "G"]])).toEqual(1);
  });
});
