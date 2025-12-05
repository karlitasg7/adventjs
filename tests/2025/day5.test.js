const { timeUntilTakeOff } = require("../../src/2025/day5/solution");

describe("Day 05 - The countdown to take off", () => {
  test("should return", () => {
    expect(
      timeUntilTakeOff("2025*12*24@23|59|30 NP", "2025*12*25@00|00|00 NP")
    ).toEqual(30);
  });

  test("should return", () => {
    expect(
      timeUntilTakeOff("2025*12*25@00|00|00 NP", "2025*12*25@00|00|00 NP")
    ).toEqual(0);
  });

  test('should return ""', () => {
    expect(
      timeUntilTakeOff("2025*12*25@00|00|12 NP", "2025*12*25@00|00|00 NP")
    ).toEqual(-12);
  });
});
