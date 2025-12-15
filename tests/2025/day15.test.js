const { drawTable } = require("../../src/2025/day15/solution");

describe("Day 15 - Drawing tables", () => {
  test("should return", () => {
    expect(
      drawTable(
        [
          { name: "Charlie", city: "New York" },
          { name: "Alice", city: "London" },
          { name: "Bob", city: "Paris" },
        ],
        "name"
      )
    ).toEqual(
      "+---------+----------+\n| A       | B        |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+"
    );
  });

  test("should return", () => {
    expect(
      drawTable(
        [
          { gift: "Book", quantity: 5 },
          { gift: "Music CD", quantity: 1 },
          { gift: "Doll", quantity: 10 },
        ],
        "quantity"
      )
    ).toEqual(
      "+----------+----+\n| A        | B  |\n+----------+----+\n| Music CD | 1  |\n| Book     | 5  |\n| Doll     | 10 |\n+----------+----+"
    );
  });
});
