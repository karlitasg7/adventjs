function runFactory(factory) {
  const grid = factory.map((line) => line.split(""));
  let row = 0;
  let col = 0;

  while (true) {
    const cell = grid[row][col];
    grid[row][col] = "x";

    switch (cell) {
      case ">":
        col++;
        break;
      case "<":
        col--;
        break;
      case "^":
        row--;
        break;
      case "v":
        row++;
        break;
      case ".":
        return "completed";
        break;
      case "x":
        return "loop";
        break;
    }

    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length) {
      return "broken";
    }
  }

  return "broken";
}

module.exports = { runFactory };
