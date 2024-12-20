const { fixGiftList } = require("../../src/2024/day20/solution");

describe("Day 20 - Find missing and duplicate gifts", () => {
  test("test 1", () => {
    expect(
      fixGiftList(
        ["puzzle", "car", "doll", "car"],
        ["car", "puzzle", "doll", "ball"]
      )
    ).toEqual({
      missing: { ball: 1 },
      extra: { car: 1 },
    });
  });

  test("test 2", () => {
    expect(
      fixGiftList(
        ["book", "train", "kite", "train"],
        ["train", "book", "kite", "ball", "kite"]
      )
    ).toEqual({
      missing: { ball: 1, kite: 1 },
      extra: { train: 1 },
    });
  });

  test("test 3", () => {
    expect(
      fixGiftList(
        ["bear", "bear", "car"],
        ["bear", "car", "puzzle", "bear", "car", "car"]
      )
    ).toEqual({
      missing: { puzzle: 1, car: 2 },
      extra: {},
    });
  });

  test("test 4", () => {
    expect(
      fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"])
    ).toEqual({
      missing: {},
      extra: {},
    });
  });
});
