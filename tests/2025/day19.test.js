const { revealSantaRoute } = require("../../src/2025/day19/solution");

describe("Day 19 - Santa's secret journey", () => {
  test("test 1", () => {
    expect(
      revealSantaRoute([
        ["MEX", "CAN"],
        ["UK", "GER"],
        ["CAN", "UK"],
      ])
    ).toEqual(["MEX", "CAN", "UK", "GER"]);
  });

  test("test 2", () => {
    expect(
      revealSantaRoute([
        ["USA", "BRA"],
        ["JPN", "PHL"],
        ["BRA", "UAE"],
        ["UAE", "JPN"],
        ["CMX", "HKN"],
      ])
    ).toEqual(["USA", "BRA", "UAE", "JPN", "PHL"]);
  });

  test("test 3", () => {
    expect(
      revealSantaRoute([
        ["STA", "HYD"],
        ["ESP", "CHN"],
      ])
    ).toEqual(["STA", "HYD"]);
  });
});
