const { runFactory } = require("../../src/2025/day13/solution");

describe("Day 13 - The assembly Line", () => {
  test("should return", () => {
    expect(runFactory([">>."])).toEqual("completed");
  });

  test("should return", () => {
    expect(runFactory([">>>"])).toEqual("broken");
  });

  test("should return", () => {
    expect(runFactory([">><"])).toEqual("loop");
  });

  test("should return", () => {
    expect(runFactory([">>v", "..<"])).toEqual("completed");
  });

  test("should return", () => {
    expect(runFactory([">>v", "<<<"])).toEqual("broken");
  });

  test("should return", () => {
    expect(runFactory([">v.", "^.."])).toEqual("completed");
  });

  test("should return", () => {
    expect(runFactory(["v.", "^."])).toEqual("loop");
  });
});
