const { drawTable } = require("../../src/2024/day15/solution");

describe("Day 15 - Drawing tables", () => {
  test("test 1", () => {
    expect(
      drawTable([
        { name: "Alice", city: "London" },
        { name: "Bob", city: "Paris" },
        { name: "Charlie", city: "New York" },
      ])
    ).toEqual(
      "+---------+----------+\n| Name    | City     |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+"
    );
  });

  test("test 2", () => {
    expect(
      drawTable([
        { gift: "Doll", quantity: 10 },
        { gift: "Book", quantity: 5 },
        { gift: "Music CD", quantity: 1 },
      ])
    ).toEqual(
      "+----------+----------+\n| Gift     | Quantity |\n+----------+----------+\n| Doll     | 10       |\n| Book     | 5        |\n| Music CD | 1        |\n+----------+----------+"
    );
  });
});
