const { getCompleted } = require("../../src/2024/day26/solution");

describe("Day 26 - Calculate the completed percentage", () => {
  test("test 1", () => {
    expect(getCompleted("01:00:00", "03:00:00")).toEqual("33%");
  });

  test("test 2", () => {
    expect(getCompleted("02:00:00", "04:00:00")).toEqual("50%");
  });

  test("test 3", () => {
    expect(getCompleted("01:00:00", "01:00:00")).toEqual("100%");
  });

  test("test 4", () => {
    expect(getCompleted("00:10:00", "01:00:00")).toEqual("17%");
  });

  test("test 5", () => {
    expect(getCompleted("01:10:10", "03:30:30")).toEqual("33%");
  });

  test("test 6", () => {
    expect(getCompleted("03:30:30", "05:50:50")).toEqual("60%");
  });
});
