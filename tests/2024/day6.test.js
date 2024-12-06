const { inBox } = require("../../src/2024/day6/solution");

describe("Day 06 - Is the gift inside the box?", () => {
  test("test 1", () => {
    expect(inBox(["###", "#*#", "###"])).toEqual(true);
  });

  test("test 2", () => {
    expect(inBox(["####", "#* #", "#  #", "####"])).toEqual(true);
  });

  test("test 3", () => {
    expect(inBox(["*####", "#   #", "#  #*", "####"])).toEqual(false);
  });

  test("test 4", () => {
    expect(inBox(["#####", "#   #", "#   #", "#   #", "#####"])).toEqual(false);
  });
});
