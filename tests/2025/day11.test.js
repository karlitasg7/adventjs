const { findUnsafeGifts } = require("../../src/2025/day11/solution");

describe("Day 11 - Unwatched Gifts", () => {
  test("should return", () => {
    expect(findUnsafeGifts([".*.", "*#*", ".*."])).toEqual(0);
  });

  test("should return", () => {
    expect(findUnsafeGifts(["...", ".*.", "..."])).toEqual(1);
  });
});
