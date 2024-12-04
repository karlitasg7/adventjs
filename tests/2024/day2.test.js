const { createFrame } = require("../../src/2024/day2/solution");

describe("Day 02 - Framing names", () => {
  test('return with "[midu, madeval, educalvolpz]"', () => {
    expect(createFrame(["midu", "madeval", "educalvolpz"])).toEqual(
      "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************"
    );
  });

  test('return with "["midu"]"', () => {
    expect(createFrame(["midu"])).toEqual("********\n* midu *\n********");
  });

  test('return with "["a", "bb", "ccc"]"', () => {
    expect(createFrame(["a", "bb", "ccc"])).toEqual(
      "*******\n* a   *\n* bb  *\n* ccc *\n*******"
    );
  });
});
