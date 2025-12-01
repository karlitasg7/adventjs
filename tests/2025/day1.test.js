const { filterGifts } = require("../../src/2025/day1/solution");

describe("Day 01 - Filter the defective gifts", () => {
  test('should return "["car", "ball"]" with "["car", "doll#arm", "ball", "#train"]"', () => {
    expect(filterGifts(["car", "doll#arm", "ball", "#train"])).toEqual([
      "car",
      "ball",
    ]);
  });

  test('should return "[]" with "["#broken", "#rusty"]"', () => {
    expect(filterGifts(["#broken", "#rusty"])).toEqual([]);
  });

  test('should return "[]" with "[]"', () => {
    expect(filterGifts([])).toEqual([]);
  });
});
