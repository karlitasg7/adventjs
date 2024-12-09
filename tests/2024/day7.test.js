const { fixPackages } = require("../../src/2024/day7/solution");

describe("Day 07 - The Grinch's attack", () => {
  test("test 1", () => {
    expect(fixPackages("a(cb)de")).toEqual("abcde");
  });

  test("test 2", () => {
    expect(fixPackages("a(bc(def)g)h")).toEqual("agdefcbh");
  });

  test("test 3", () => {
    expect(fixPackages("abc(def(gh)i)jk")).toEqual("abcighfedjk");
  });

  test("test 4", () => {
    expect(fixPackages("a(b(c))e")).toEqual("acbe");
  });
});
