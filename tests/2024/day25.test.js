const { execute } = require("../../src/2024/day25/solution");

describe("Day 25 - Execute the magical language", () => {
  test("test 1", () => {
    expect(execute("+++")).toEqual(3);
  });

  test("test 2", () => {
    expect(execute("+--")).toEqual(-1);
  });

  test("test 3", () => {
    expect(execute(">+++[-]")).toEqual(0);
  });

  test("test 4", () => {
    expect(execute(">>>+{++}")).toEqual(3);
  });

  test("test 5", () => {
    expect(execute("+{[-]+}+")).toEqual(2);
  });

  test("test 6", () => {
    expect(execute("{+}{+}{+}")).toEqual(0);
  });

  test("test 7", () => {
    expect(execute("------[+]++")).toEqual(2);
  });

  test("test 8", () => {
    expect(execute("-[++{-}]+{++++}")).toEqual(5);
  });
});
