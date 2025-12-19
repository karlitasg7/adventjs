function clearGifts(warehouse, drops) {
  const isRowFull = (row) => {
    return row.every((cell) => cell === "#");
  };

  for (const drop of drops) {
    for (let i = warehouse.length - 1; i >= 0; i--) {
      if (warehouse[i][drop] === ".") {
        warehouse[i][drop] = "#";

        if (isRowFull(warehouse[i])) {
          for (let row = warehouse.length - 2; row >= 0; row--) {
            warehouse[row + 1] = warehouse[row];
          }

          warehouse[0] = warehouse[0].map((cell) => ".");
        }
        break;
      }
    }
  }

  return warehouse;
}

module.exports = { clearGifts };
