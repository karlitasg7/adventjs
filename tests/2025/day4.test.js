const { decodeSantaPin } = require("../../src/2025/day4/solution");

describe("Day 04 - Decipher the santa PIN", () => {
  test("should return", () => {
    expect(decodeSantaPin("[1++][2-][3+][<]")).toEqual("3144");
  });

  test("should return", () => {
    expect(decodeSantaPin("[9+][0-][4][<]")).toEqual("0944");
  });

  test('should return ""', () => {
    expect(decodeSantaPin("[1+][2-]")).toEqual(null);
  });
});
