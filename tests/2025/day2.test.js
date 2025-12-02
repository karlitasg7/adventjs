const { manufactureGifts } = require("../../src/2025/day2/solution");

describe("Day 02 - Manufacture the toys", () => {
  test('should return "["car", "car", "car", "doll", "ball", "ball"]"', () => {
    expect(
      manufactureGifts([
        { toy: "car", quantity: 3 },
        { toy: "doll", quantity: 1 },
        { toy: "ball", quantity: 2 },
      ])
    ).toEqual(["car", "car", "car", "doll", "ball", "ball"]);
  });

  test('should return "["puzzle"]"', () => {
    expect(
      manufactureGifts([
        { toy: "train", quantity: 0 },
        { toy: "bear", quantity: -2 },
        { toy: "puzzle", quantity: 1 },
      ])
    ).toEqual(["puzzle"]);
  });

  test('should return "[]" with "[]"', () => {
    expect(manufactureGifts([])).toEqual([]);
  });
});
