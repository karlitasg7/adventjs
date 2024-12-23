const { treeHeight } = require("../../src/2024/day21/solution");

describe("Day 21 - Calculate the height of the Christmas tree", () => {
  test("test 1", () => {
    expect(
      treeHeight({
        value: "🎁",
        left: {
          value: "🎄",
          left: {
            value: "⭐",
            left: null,
            right: null,
          },
          right: {
            value: "🎅",
            left: null,
            right: null,
          },
        },
        right: {
          value: "❄️",
          left: null,
          right: {
            value: "🦌",
            left: null,
            right: null,
          },
        },
      })
    ).toEqual(3);
  });
});
