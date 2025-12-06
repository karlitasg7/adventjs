const { matchGloves } = require("../../src/2025/day6/solution");

describe("Day 06 - Matching gloves", () => {
  test("should return", () => {
    expect(
      matchGloves([
        { hand: "L", color: "red" },
        { hand: "R", color: "red" },
        { hand: "R", color: "green" },
        { hand: "L", color: "blue" },
        { hand: "L", color: "green" },
      ])
    ).toEqual(["red", "green"]);
  });

  test("should return", () => {
    expect(
      matchGloves([
        { hand: "L", color: "gold" },
        { hand: "R", color: "gold" },
        { hand: "L", color: "gold" },
        { hand: "L", color: "gold" },
        { hand: "R", color: "gold" },
      ])
    ).toEqual(["gold", "gold"]);
  });

  test('should return ""', () => {
    expect(
      matchGloves([
        { hand: "L", color: "red" },
        { hand: "R", color: "green" },
        { hand: "L", color: "blue" },
      ])
    ).toEqual([]);
  });
});
