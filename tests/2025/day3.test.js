const { drawGift } = require("../../src/2025/day3/solution");

describe("Day 02 - Manufacture the toys", () => {
  test("should return", () => {
    expect(drawGift(4, "*")).toEqual("****\n*  *\n*  *\n****");
  });

  test("should return", () => {
    expect(drawGift(3, "#")).toEqual("###\n# #\n###");
  });

  test('should return ""', () => {
    expect(drawGift(2, "-")).toEqual("--\n--");
  });

  test('should return ""', () => {
    expect(drawGift(1, "+")).toEqual("");
  });
});
