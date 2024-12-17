function detectBombs(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  return grid.map((row, i) =>
    row.map((_, j) =>
      directions.reduce((count, [dx, dy]) => {
        const x = i + dx;
        const y = j + dy;
        return x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y]
          ? count + 1
          : count;
      }, 0)
    )
  );
}

module.exports = { detectBombs };
