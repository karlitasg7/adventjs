function minStepsToDeliver(map) {
  const findPosition = (map, symbol) => {
    const row = map.findIndex((row) => row.includes(symbol));
    const column = map[row].indexOf(symbol);
    return { row, column };
  };

  const findAllPositions = (map, symbol) => {
    const positions = [];
    for (let row = 0; row < map.length; row++) {
      for (let column = 0; column < map[row].length; column++) {
        if (map[row][column] === symbol) {
          positions.push({ row, column });
        }
      }
    }
    return positions;
  };

  const isOutOfBounds = (map, row, column) => {
    return (
      row < 0 || row >= map.length || column < 0 || column >= map[0].length
    );
  };

  const isBlocked = (map, row, column, visited) => {
    return map[row][column] === "#" || visited[row][column];
  };

  const isValid = (map, row, column, visited) => {
    return (
      !isOutOfBounds(map, row, column) && !isBlocked(map, row, column, visited)
    );
  };

  const reachHouse = (actual, house) => {
    return actual.row === house.row && actual.column === house.column;
  };

  const start = findPosition(map, "S");
  const allHouses = findAllPositions(map, "G");
  let totalSteps = 0;

  const directions = [
    [-1, 0], // up
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
  ];

  for (const house of allHouses) {
    const visited = Array(map.length)
      .fill(null)
      .map(() => Array(map[0].length).fill(false));

    const queue = [{ row: start.row, column: start.column, steps: 0 }];
    visited[start.row][start.column] = true;

    let found = false;

    while (queue.length > 0) {
      const actual = queue.shift();

      if (reachHouse(actual, house)) {
        totalSteps += actual.steps;
        found = true;
        break;
      }

      for (let [deltaRow, deltaColumn] of directions) {
        const newRow = actual.row + deltaRow;
        const newColumn = actual.column + deltaColumn;

        if (isValid(map, newRow, newColumn, visited)) {
          visited[newRow][newColumn] = true;

          queue.push({
            row: newRow,
            column: newColumn,
            steps: actual.steps + 1,
          });
        }
      }
    }

    if (!found) {
      return -1;
    }
  }

  return totalSteps;
}

module.exports = { minStepsToDeliver };
