const { compile } = require("../../src/2024/day10/solution");

describe("Day 10 - The elfish assembler", () => {
  test("test 1", () => {
    expect(
      compile(["MOV -1 C", "INC C", "JMP C 1", "MOV C A", "INC A"])
    ).toEqual(2);
  });

  test("test 2", () => {
    expect(compile(["INC C", "DEC B", "MOV C Y", "INC Y"])).toEqual(undefined);
  });
});
