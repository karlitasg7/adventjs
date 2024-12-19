const { distributeWeight } = require("../../src/2024/day19/solution");

describe("Day 19 - Stack magical boxes to deliver gifts", () => {
  test("test 1", () => {
    expect(distributeWeight(1)).toEqual(" _ \n|_|");
  });

  test("test 2", () => {
    expect(distributeWeight(2)).toEqual(" ___ \n|___|");
  });

  test("test 3", () => {
    expect(distributeWeight(3)).toEqual(" _ \n|_|_\n|___|");
  });

  test("test 4", () => {
    expect(distributeWeight(4)).toEqual(" ___ \n|___|\n|___|");
  });

  test("test 5", () => {
    expect(distributeWeight(5)).toEqual(" _____ \n|     |\n|_____|");
  });
});
