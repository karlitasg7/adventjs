const { hasFourInARow } = require("../../src/2025/day18/solution");

describe("Day 18 - Lights in line with diagonals", () => {
  test("test 1", () => {
    expect(
      hasFourInARow([
        ["R", ".", ".", "."],
        [".", "R", ".", "."],
        [".", ".", "R", "."],
        [".", ".", ".", "R"],
      ])
    ).toEqual(true);
  });

  test("test 2", () => {
    expect(
      hasFourInARow([
        [".", ".", ".", "G"],
        [".", ".", "G", "."],
        [".", "G", ".", "."],
        ["G", ".", ".", "."],
      ])
    ).toEqual(true);
  });

  test("test 3", () => {
    expect(
      hasFourInARow([
        ["R", "R", "R", "R"],
        ["G", "G", ".", "."],
        [".", ".", ".", "."],
        [".", ".", ".", "."],
      ])
    ).toEqual(true);
  });

  test("test 4", () => {
    expect(
      hasFourInARow([
        ["R", "G", "R"],
        ["G", "R", "G"],
        ["G", "R", "G"],
      ])
    ).toEqual(false);
  });
});
