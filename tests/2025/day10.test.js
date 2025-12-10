const { maxDepth } = require("../../src/2025/day10/solution");

describe("Day 10 - Depth of christmas magic", () => {
  test("should return", () => {
    expect(maxDepth("[]")).toEqual(1);
  });

  test("should return", () => {
    expect(maxDepth("[[]]")).toEqual(2);
  });

  test('should return ""', () => {
    expect(maxDepth("[][]")).toEqual(1);
  });

  test('should return ""', () => {
    expect(maxDepth("[[][]]")).toEqual(2);
  });

  test('should return ""', () => {
    expect(maxDepth("[[[]]]")).toEqual(3);
  });

  test('should return ""', () => {
    expect(maxDepth("[][[]][]")).toEqual(2);
  });

  test('should return ""', () => {
    expect(maxDepth("][")).toEqual(-1);
  });

  test('should return ""', () => {
    expect(maxDepth("[[[")).toEqual(-1);
  });

  test('should return ""', () => {
    expect(maxDepth("[]]]")).toEqual(-1);
  });

  test('should return ""', () => {
    expect(maxDepth("[][][")).toEqual(-1);
  });
});
