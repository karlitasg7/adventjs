const { isTreesSynchronized } = require("../../src/2025/day24/solution");

const tree1 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

const tree2 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "⭐" },
};

const tree3 = {
  value: "🎄",
  left: { value: "🎅" },
  right: { value: "🎁" },
};

const tree4 = {
  value: "🎄",
  left: { value: "⭐" },
  right: { value: "🎅" },
};

describe("Day 24 - Check if trees are magical mirrors", () => {
  test("test 1", () => {
    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, "🎄"]);
  });

  test("test 2", () => {
    expect(isTreesSynchronized(tree1, tree3)).toEqual([false, "🎄"]);
  });

  test("test 3", () => {
    expect(isTreesSynchronized(tree1, tree4)).toEqual([false, "🎄"]);
  });

  test("test 4", () => {
    expect(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" })).toEqual([
      false,
      "🎅",
    ]);
  });
});
