function hasFourLights(board) {
  const width = board[0]?.length ?? 0;
  const flatBoard = board.map((row) => row.join("")).join(" ");
  const regex = new RegExp(`RRRR|GGGG|([RG])(.{${width}}\\1){3}`);
  return regex.test(flatBoard);
}

module.exports = { hasFourLights };
