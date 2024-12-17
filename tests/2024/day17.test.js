const { detectBombs } = require("../../src/2024/day17/solution");

describe("Day 17 - Grinch's bombs", () => {
  test("test 1", () => {
    expect(
      detectBombs([
        [true, false, false],
        [false, true, false],
        [false, false, false],
      ])
    ).toEqual([
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ]);
  });

  test("test 2", () => {
    expect(
      detectBombs([
        [true, false],
        [false, false],
      ])
    ).toEqual([
      [0, 1],
      [1, 1],
    ]);
  });

  test("test 3", () => {
    expect(
      detectBombs([
        [true, true],
        [false, false],
        [true, true],
      ])
    ).toEqual([
      [1, 1],
      [4, 4],
      [1, 1],
    ]);
  });
});
