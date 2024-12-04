const { organizeInventory } = require("../../src/2024/day3/solution");

describe("Day 03 - Organizing the inventory", () => {
  test("return empty if array is empty", () => {
    expect(organizeInventory([])).toEqual({});
  });

  test('test 1"', () => {
    expect(
      organizeInventory([
        { name: "doll", quantity: 5, category: "toys" },
        { name: "car", quantity: 3, category: "toys" },
        { name: "ball", quantity: 2, category: "sports" },
        { name: "car", quantity: 2, category: "toys" },
        { name: "racket", quantity: 4, category: "sports" },
      ])
    ).toEqual({
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    });
  });

  test("test 2", () => {
    expect(
      organizeInventory([
        { name: "book", quantity: 10, category: "education" },
        { name: "book", quantity: 5, category: "education" },
        { name: "paint", quantity: 3, category: "art" },
      ])
    ).toEqual({
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    });
  });
});
