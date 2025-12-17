const { hasFourLights } = require("../../src/2025/day17/solution");

describe("Day 17 - The christmas lights panel", () => {
  test("test 1", () => {
    expect(
      hasFourLights([
        [".", ".", ".", ".", "."],
        ["R", "R", "R", "R", "."],
        ["G", "G", ".", ".", "."],
      ])
    ).toEqual(true);
  });

  test("test 2", () => {
    expect(
      hasFourLights([
        [".", "G", ".", "."],
        [".", "G", ".", "."],
        [".", "G", ".", "."],
        [".", "G", ".", "."],
      ])
    ).toEqual(true);
  });

  test("test 3", () => {
    expect(
      hasFourLights([
        ["R", "G", "R"],
        ["G", "R", "G"],
        ["G", "R", "G"],
      ])
    ).toEqual(false);
  });
});
