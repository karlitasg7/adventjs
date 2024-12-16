const { removeSnow } = require("../../src/2024/day16/solution");

describe("Day 16 - Cleaning the snow path", () => {
  test("test 1", () => {
    expect(removeSnow("zxxzoz")).toEqual("oz");
  });

  test("test 2", () => {
    expect(removeSnow("abcdd")).toEqual("abc");
  });

  test("test 3", () => {
    expect(removeSnow("zzz")).toEqual("z");
  });

  test("test 4", () => {
    expect(removeSnow("a")).toEqual("a");
  });
});
