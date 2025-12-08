const { drawTree } = require("../../src/2025/day7/solution");

describe("Day 07 - Decorating the tree", () => {
  test("should return", () => {
    expect(drawTree(5, "o", 2)).toEqual(
      "    *\n   o*o\n  *o*o*\n o*o*o*o\n*o*o*o*o*\n    #"
    );
  });

  test("should return", () => {
    expect(drawTree(3, "@", 3)).toEqual("  *\n *@*\n*@**@\n  #");
  });

  test('should return ""', () => {
    expect(drawTree(4, "+", 1)).toEqual("   +\n  +++\n +++++\n+++++++\n   #");
  });
});
