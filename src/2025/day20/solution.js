function dropGifts(warehouse, drops) {
  for (const drop of drops) {
    for (let i = warehouse.length - 1; i >= 0; i--) {
      if (warehouse[i][drop] === ".") {
        warehouse[i][drop] = "#";
        break;
      }
    }
  }

  return warehouse;
}

module.exports = { dropGifts };
