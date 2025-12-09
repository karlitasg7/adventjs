function moveReno(board, moves) {
  const DIRECTIONS = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const boardArray = board
    .split("\n")
    .filter((row) => row.trim() !== "")
    .map((row) => row.split(""));

  let renoPositionRow = boardArray.findIndex((row) => row.includes("@"));
  let renoPositionColumn = boardArray[renoPositionRow].indexOf("@");

  let pickSomething = false;

  for (const move of moves) {
    const [dy, dx] = DIRECTIONS[move];
    const newPosition = [renoPositionRow + dy, renoPositionColumn + dx];

    if (
      newPosition[0] < 0 ||
      newPosition[0] >= boardArray.length ||
      newPosition[1] < 0 ||
      newPosition[1] >= boardArray[0].length
    ) {
      return pickSomething ? "success" : "crash";
    }

    const newPositionValue = boardArray[newPosition[0]][newPosition[1]];

    if (newPositionValue === "#") {
      return pickSomething ? "success" : "crash";
    }

    if (newPositionValue === "*") {
      pickSomething = true;
    }

    renoPositionRow = newPosition[0];
    renoPositionColumn = newPosition[1];
  }

  return pickSomething ? "success" : "fail";
}

module.exports = { moveReno };
