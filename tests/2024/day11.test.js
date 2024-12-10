const { decodeFilename } = require("../../src/2024/day11/solution");

describe("Day 11 - Filenames encoded", () => {
  test("test 1", () => {
    expect(
      decodeFilename("2023122512345678_sleighDesign.png.grinchwa")
    ).toEqual("sleighDesign.png");
  });

  test("test 2", () => {
    expect(decodeFilename("42_chimney_dimensions.pdf.hack2023")).toEqual(
      "chimney_dimensions.pdf"
    );
  });

  test("test 3", () => {
    expect(decodeFilename("987654321_elf-roster.csv.tempfile")).toEqual(
      "elf-roster.csv"
    );
  });
});
