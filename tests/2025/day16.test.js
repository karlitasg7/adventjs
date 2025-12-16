const { packGifts } = require("../../src/2025/day16/solution");

describe("Day 16 - Packing gifts for Santa", () => {
  test("test 1", () => {
    expect(packGifts([2, 3, 4, 1], 5)).toEqual(2);
  });

  test("test 2", () => {
    expect(packGifts([3, 3, 2, 1], 3)).toEqual(3);
  });

  test("test 3", () => {
    expect(packGifts([1, 1, 1, 1], 2)).toEqual(2);
  });

  test("test 4", () => {
    expect(packGifts([5, 6, 1], 5)).toEqual(null);
  });

  test("test 5", () => {
    expect(packGifts([], 10)).toEqual(0);
  });
});
