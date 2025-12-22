const { canEscape } = require("../../src/2025/day22/solution");

describe("Day 22 - The sleight maze", () => {
  test("test 1", () => {
    expect(
      canEscape([
        ["S", ".", "#", "."],
        ["#", ".", "#", "."],
        [".", ".", ".", "."],
        ["#", "#", "#", "E"],
      ])
    ).toEqual(true);
  });

  test("test 2", () => {
    expect(
      canEscape([
        ["S", "#", "#"],
        [".", "#", "."],
        [".", "#", "E"],
      ])
    ).toEqual(false);
  });

  test("test 3", () => {
    expect(canEscape([["S", "E"]])).toEqual(true);
  });

  test("test 4", () => {
    expect(
      canEscape([
        ["S", ".", ".", ".", "."],
        ["#", "#", "#", "#", "."],
        [".", ".", ".", ".", "."],
        [".", "#", "#", "#", "#"],
        [".", ".", ".", ".", "E"],
      ])
    ).toEqual(true);
  });

  test("test 5", () => {
    expect(
      canEscape([
        ["S", ".", "."],
        [".", ".", "."],
        ["#", "#", "#"],
        [".", ".", "E"],
      ])
    ).toEqual(false);
  });
});
