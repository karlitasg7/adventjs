const { elfBattle } = require("../../src/2025/day12/solution");

describe("Day 12 - ELF Battle", () => {
  test("should return", () => {
    expect(elfBattle("A", "B")).toEqual(0);
  });

  test("should return", () => {
    expect(elfBattle("F", "B")).toEqual(1);
  });

  test("should return", () => {
    expect(elfBattle("AAB", "BBA")).toEqual(0);
  });

  test("should return", () => {
    expect(elfBattle("AFA", "BBA")).toEqual(1);
  });

  test("should return", () => {
    expect(elfBattle("AFAB", "BBAF")).toEqual(1);
  });

  test("should return", () => {
    expect(elfBattle("AA", "FF")).toEqual(2);
  });
});
