const { findUniqueToy } = require("../../src/2025/day8/solution");

describe("Day 08 - Find the unique toy", () => {
  test("should return", () => {
    expect(findUniqueToy("Gift")).toEqual("G");
  });

  test("should return", () => {
    expect(findUniqueToy("sS")).toEqual("");
  });

  test('should return ""', () => {
    expect(findUniqueToy("reindeeR")).toEqual("i");
  });

  test('should return ""', () => {
    expect(findUniqueToy("AaBbCc")).toEqual("");
  });

  test('should return ""', () => {
    expect(findUniqueToy("abcDEF")).toEqual("a");
  });

  test('should return ""', () => {
    expect(findUniqueToy("aAaAaAF")).toEqual("F");
  });

  test('should return ""', () => {
    expect(findUniqueToy("sTreSS")).toEqual("T");
  });

  test('should return ""', () => {
    expect(findUniqueToy("z")).toEqual("z");
  });
});
