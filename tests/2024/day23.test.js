const { findMissingNumbers } = require("../../src/2024/day23/solution");

describe("Day 23 - Find the missing numbers", () => {
  test("test 1", () => {
    expect(findMissingNumbers([1, 2, 4, 6])).toEqual([3, 5]);
  });

  test("test 2", () => {
    expect(findMissingNumbers([4, 8, 7, 2])).toEqual([1, 3, 5, 6]);
  });

  test("test 3", () => {
    expect(findMissingNumbers([3, 2, 1, 1])).toEqual([]);
  });

  test("test 4", () => {
    expect(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])).toEqual([4]);
  });
});
