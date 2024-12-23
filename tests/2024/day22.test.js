const { generateGiftSets } = require("../../src/2024/day22/solution");

describe("Day 22 - Generate gift combinations", () => {
  test("test 1", () => {
    expect(generateGiftSets(["car", "doll", "puzzle"])).toEqual([
      ["car"],
      ["doll"],
      ["puzzle"],
      ["car", "doll"],
      ["car", "puzzle"],
      ["doll", "puzzle"],
      ["car", "doll", "puzzle"],
    ]);
  });

  test("test 2", () => {
    expect(generateGiftSets(["ball"])).toEqual([["ball"]]);
  });

  test("test 3", () => {
    expect(generateGiftSets(["game", "pc"])).toEqual([
      ["game"],
      ["pc"],
      ["game", "pc"],
    ]);
  });
});
