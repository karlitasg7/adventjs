function findUnsafeGifts(warehouse) {
  const grid = warehouse.map((row) => row.split(""));

  const hasCamera = (row, col) => {
    return (
      grid[row - 1]?.[col] === "#" ||
      grid[row + 1]?.[col] === "#" ||
      grid[row][col - 1] === "#" ||
      grid[row][col + 1] === "#"
    );
  };

  let countWithoutCamera = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "*" && !hasCamera(i, j)) {
        countWithoutCamera++;
      }
    }
  }

  return countWithoutCamera;
}

module.exports = { findUnsafeGifts };
