function canEscapeDFS(maze) {
  const findPosition = (maze, symbol) => {
    const row = maze.findIndex((row) => row.includes(symbol));
    const column = maze[row].indexOf(symbol);
    return { row, column };
  };

  const isOutOfBounds = (maze, row, column) => {
    return (
      row < 0 || row >= maze.length || column < 0 || column >= maze[0].length
    );
  };

  const isBlocked = (maze, row, column, visited) => {
    return maze[row][column] === "#" || visited[row][column];
  };

  const reachEnd = (row, column, end) => {
    return row === end.row && column === end.column;
  };

  const dfs = (maze, row, column, visited, end) => {
    if (
      isOutOfBounds(maze, row, column) ||
      isBlocked(maze, row, column, visited)
    )
      return false;

    visited[row][column] = true;

    const reachedEnd = reachEnd(row, column, end);
    if (reachedEnd) return true;

    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];

    return directions.some(([dRow, dCol]) =>
      dfs(maze, row + dRow, column + dCol, visited, end)
    );
  };

  const start = findPosition(maze, "S");
  const end = findPosition(maze, "E");

  const visited = Array(maze.length)
    .fill(null)
    .map(() => Array(maze[0].length).fill(false));

  const found = dfs(maze, start.row, start.column, visited, end);
  return found;
}

function canEscape(maze) {
  const findPosition = (maze, symbol) => {
    const row = maze.findIndex((row) => row.includes(symbol));
    const column = maze[row].indexOf(symbol);
    return { row, column };
  };

  const isOutOfBounds = (maze, row, column) => {
    return (
      row < 0 || row >= maze.length || column < 0 || column >= maze[0].length
    );
  };

  const isBlocked = (maze, row, column, visited) => {
    return maze[row][column] === "#" || visited[row][column];
  };

  const isValid = (maze, row, column, visited) => {
    return (
      !isOutOfBounds(maze, row, column) &&
      !isBlocked(maze, row, column, visited)
    );
  };

  const start = findPosition(maze, "S");
  const end = findPosition(maze, "E");

  const visited = Array(maze.length)
    .fill(null)
    .map(() => Array(maze[0].length).fill(false));

  const queue = [{ row: start.row, column: start.column }];

  visited[start.row][start.column] = true;

  const directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
  ];

  while (queue.length > 0) {
    const actual = queue.shift();

    if (actual.row === end.row && actual.column === end.column) {
      return true;
    }

    for (let [deltaRow, deltaColumn] of directions) {
      const newRow = actual.row + deltaRow;
      const newColumn = actual.column + deltaColumn;

      if (isValid(maze, newRow, newColumn, visited)) {
        visited[newRow][newColumn] = true;

        queue.push({
          row: newRow,
          column: newColumn,
        });
      }
    }
  }
  return false;
}

module.exports = { canEscape };
