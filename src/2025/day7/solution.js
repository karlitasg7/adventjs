function drawTree(height, ornament, frequency) {
  const spaces = (n) => " ".repeat(n);
  let tree = "";
  let starCount = 0;

  for (let i = 1; i <= height; i++) {
    tree += spaces(height - i);

    const starsInRow = 2 * i - 1;
    for (let j = 0; j < starsInRow; j++) {
      starCount++;
      tree += starCount % frequency === 0 ? ornament : "*";
    }

    tree += "\n";
  }

  tree += spaces(height - 1) + "#";

  return tree;
}

module.exports = { drawTree };
