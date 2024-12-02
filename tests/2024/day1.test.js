const { prepareGifts } = require("../../src/2024/day1");

describe("Day 01 - First gift repeated", () => {
  test('should return "[1, 2, 3, 4, 5]" with "[3, 1, 2, 3, 4, 2, 5]"', () => {
    expect(prepareGifts([3, 1, 2, 3, 4, 2, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return "[5, 6]" with "[6, 5, 5, 5, 5]"', () => {
    expect(prepareGifts([6, 5, 5, 5, 5])).toEqual([5, 6]);
  });

  test('should return "[]" with "[]"', () => {
    expect(prepareGifts([])).toEqual([]);
  });
});
