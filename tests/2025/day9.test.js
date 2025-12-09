const { moveReno } = require("../../src/2025/day9/solution");

const board = `
.....
.*#.*
.@...
.....
`;

describe("Day 09 - The reno robot aspirator", () => {
  test("should return", () => {
    expect(moveReno(board, "D")).toEqual("fail");
  });

  test("should return", () => {
    expect(moveReno(board, "U")).toEqual("success");
  });

  test('should return ""', () => {
    expect(moveReno(board, "RU")).toEqual("crash");
  });

  test('should return ""', () => {
    expect(moveReno(board, "RRRUU")).toEqual("success");
  });

  test('should return ""', () => {
    expect(moveReno(board, "DD")).toEqual("crash");
  });

  test('should return ""', () => {
    expect(moveReno(board, "UUU")).toEqual("success");
  });

  test('should return ""', () => {
    expect(moveReno(board, "RR")).toEqual("fail");
  });
});
