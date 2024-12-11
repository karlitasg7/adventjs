const { calculatePrice } = require("../../src/2024/day12/solution");

describe("Day 12 - How much does the tree cost?", () => {
  test("test 1", () => {
    expect(calculatePrice("***")).toEqual(3);
  });

  test("test 2", () => {
    expect(calculatePrice("*o")).toEqual(4);
  });

  test("test 3", () => {
    expect(calculatePrice("o*")).toEqual(6);
  });

  test("test 4", () => {
    expect(calculatePrice("*o*")).toEqual(5);
  });

  test("test 5", () => {
    expect(calculatePrice("**o*")).toEqual(6);
  });

  test("test 6", () => {
    expect(calculatePrice("o***")).toEqual(8);
  });

  test("test 7", () => {
    expect(calculatePrice("*o@")).toEqual(94);
  });

  test("test 8", () => {
    expect(calculatePrice("*#")).toEqual(49);
  });

  test("test 9", () => {
    expect(calculatePrice("@@@")).toEqual(300);
  });

  test("test 10", () => {
    expect(calculatePrice("#@")).toEqual(50);
  });

  test("test 11", () => {
    expect(calculatePrice("#@Z")).toEqual(undefined);
  });
});
