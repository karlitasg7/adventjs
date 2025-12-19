const { clearGifts } = require("../../src/2025/day21/solution");

describe("Day 21 - The cleaning robot", () => {
  test("test 1", () => {
    expect(
      clearGifts(
        [
          [".", ".", "."],
          [".", ".", "."],
          ["#", ".", "#"],
        ],
        [1]
      )
    ).toEqual([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ]);
  });

  test("test 2", () => {
    expect(
      clearGifts(
        [
          [".", ".", "#"],
          ["#", ".", "#"],
          ["#", ".", "#"],
        ],
        [0, 1, 2]
      )
    ).toEqual([
      [".", ".", "#"],
      ["#", ".", "#"],
      ["#", ".", "#"],
    ]);
  });
});
