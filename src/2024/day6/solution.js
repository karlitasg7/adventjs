function inBox(box) {
  const rows = box.length;
  const cols = box[0].length;

  for (let row = 1; row < rows - 1; row++) {
    const col = box[row].indexOf("*");
    if (col > 0 && col < cols - 1) {
      if (
        box[0][col] === "#" &&
        box[rows - 1][col] === "#" &&
        box[row][0] === "#" &&
        box[row][cols - 1] === "#"
      ) {
        return true;
      }
    }
  }

  return false;
}

module.exports = { inBox };
