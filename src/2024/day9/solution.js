function moveTrain(board, mov) {
  const DIRECTIONS = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const DESTINATION = {
    "*": "eat",
    o: "crash",
    undefined: "crash",
    "·": "none",
  };

  const engineRow = board.findIndex((row) => row.includes("@"));
  const engineCol = board[engineRow].indexOf("@");

  const [dy, dx] = DIRECTIONS[mov];

  return DESTINATION[board[engineRow + dy]?.[engineCol + dx]];
}

module.exports = { moveTrain };
