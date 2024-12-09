function moveTrain(board, mov) {
  let train = { x: 0, y: 0 };

  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    if (board[i].includes("@")) {
      train.y = i;
      train.x = board[i].indexOf("@");
      break;
    }
  }

  if (mov === "U") {
    if (train.y === 0 || board[train.y - 1][train.x] === "o") {
      return "crash";
    }
    if (board[train.y - 1][train.x] === "*") {
      return "eat";
    }
    return "none";
  }

  if (mov === "D") {
    if (train.y === rows - 1 || board[train.y + 1][train.x] === "o") {
      return "crash";
    }
    if (board[train.y + 1][train.x] === "*") {
      return "eat";
    }
    return "none";
  }

  if (mov === "L") {
    if (train.x === 0 || board[train.y][train.x - 1] === "o") {
      return "crash";
    }
    if (board[train.y][train.x - 1] === "*") {
      return "eat";
    }
    return "none";
  }

  if (mov === "R") {
    if (train.x === cols - 1 || board[train.y][train.x + 1] === "o") {
      return "crash";
    }
    if (board[train.y][train.x + 1] === "*") {
      return "eat";
    }
    return "none";
  }

  return "none";
}

module.exports = { moveTrain };
