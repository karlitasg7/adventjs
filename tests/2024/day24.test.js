const { isTreesSynchronized } = require("../../src/2024/day24/solution");

describe("Day 24 - Check if trees are magical mirrors", () => {
  test("test 1", () => {
    expect(
      isTreesSynchronized(
        {
          value: "🎄",
          left: { value: "⭐" },
          right: { value: "🎅" },
        },
        {
          value: "🎄",
          left: { value: "🎅" },
          right: { value: "⭐" },
        }
      )
    ).toEqual([true, "🎄"]);
  });

  test("test 2", () => {
    expect(
      isTreesSynchronized(
        {
          value: "🎄",
          left: { value: "⭐" },
          right: { value: "🎅" },
        },
        {
          value: "🎄",
          left: { value: "🎅" },
          right: { value: "🎁" },
        }
      )
    ).toEqual([false, "🎄"]);
  });

  test("test 3", () => {
    expect(
      isTreesSynchronized(
        {
          value: "🎄",
          left: { value: "⭐" },
          right: { value: "🎅" },
        },
        {
          value: "🎄",
          left: { value: "⭐" },
          right: { value: "🎅" },
        }
      )
    ).toEqual([false, "🎄"]);
  });

  test("test 4", () => {
    expect(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" })).toEqual([
      false,
      "🎅",
    ]);
  });
});
