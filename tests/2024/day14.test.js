const { minMovesToStables } = require("../../src/2024/day14/solution");

describe("Day 14 - Weaving the reno", () => {
  test("test 1", () => {
    expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toEqual(3);
  });

  test("test 2", () => {
    expect(minMovesToStables([1, 1, 3], [1, 8, 4])).toEqual(8);
  });
});
