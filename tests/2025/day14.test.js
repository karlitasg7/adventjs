const { findGiftPath } = require("../../src/2025/day14/solution");

const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};

describe("Day 14 - Find the gift path", () => {
  test("should return", () => {
    expect(findGiftPath(workshop, "train")).toEqual([
      "storage",
      "shelf",
      "box1",
    ]);
  });

  test("should return", () => {
    expect(findGiftPath(workshop, "switch")).toEqual([
      "storage",
      "shelf",
      "box2",
    ]);
  });

  test("should return", () => {
    expect(findGiftPath(workshop, "car")).toEqual(["storage", "box"]);
  });

  test("should return", () => {
    expect(findGiftPath(workshop, "doll")).toEqual(["gift"]);
  });

  test("should return", () => {
    expect(findGiftPath(workshop, "plane")).toEqual([]);
  });
});
