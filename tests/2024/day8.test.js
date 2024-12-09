const { drawRace } = require("../../src/2024/day8/solution");

describe("Day 08 - The reno race", () => {
  test("test 1", () => {
    expect(drawRace([0, 5, -3], 10)).toEqual(
      "  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3"
    );
  });

  test("test 2", () => {
    expect(drawRace([2, -1, 0, 5], 8)).toEqual(
      "   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4"
    );
  });

  test("test 3", () => {
    expect(drawRace([3, 7, -2], 12)).toEqual(
      "  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3"
    );
  });
});
