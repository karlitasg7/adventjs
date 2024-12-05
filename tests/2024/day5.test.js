const { organizeShoes } = require("../../src/2024/day5/solution");

describe("Day 05 - Shoe pairing", () => {
  test("test 1", () => {
    expect(
      organizeShoes([
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 42 },
      ])
    ).toEqual([38, 42]);
  });

  test("test 2", () => {
    expect(
      organizeShoes([
        { type: "I", size: 38 },
        { type: "R", size: 38 },
        { type: "I", size: 38 },
        { type: "I", size: 38 },
        { type: "R", size: 38 },
      ])
    ).toEqual([38, 38]);
  });

  test("test 3", () => {
    expect(
      organizeShoes([
        { type: "I", size: 38 },
        { type: "R", size: 36 },
        { type: "R", size: 42 },
        { type: "I", size: 41 },
        { type: "I", size: 43 },
      ])
    ).toEqual([]);
  });
});
