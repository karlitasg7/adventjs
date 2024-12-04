const { createXmasTree } = require("../../src/2024/day4/solution");

describe("Day 04 - Decorating the Christmas tree", () => {
  test('test 1"', () => {
    expect(createXmasTree(5, "*")).toEqual(
      "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____"
    );
  });

  test("test 2", () => {
    expect(createXmasTree(3, "+")).toEqual("__+__\n_+++_\n+++++\n__#__\n__#__");
  });

  test("test 3", () => {
    expect(createXmasTree(6, "@")).toEqual(
      "_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____"
    );
  });
});
