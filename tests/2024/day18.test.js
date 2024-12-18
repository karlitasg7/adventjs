const { findInAgenda } = require("../../src/2024/day18/solution");

describe("Day 18 - Santa's Magic Agenda", () => {
  test("test 1", () => {
    expect(
      findInAgenda(
        `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,
        "34-600-123-456"
      )
    ).toEqual({ name: "Juan Perez", address: "Calle Gran Via 12" });
  });

  test("test 2", () => {
    expect(
      findInAgenda(
        `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,
        "600-987"
      )
    ).toEqual({ name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" });
  });

  test("test 3", () => {
    expect(
      findInAgenda(
        `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,
        "111"
      )
    ).toEqual(null);
  });

  test("test 4", () => {
    expect(
      findInAgenda(
        `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,
        "1"
      )
    ).toEqual(null);
  });
});
