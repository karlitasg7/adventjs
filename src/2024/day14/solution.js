function minMovesToStables(reindeer, stables) {
  reindeer.sort();
  stables.sort();

  let moves = 0;
  for (let i = 0; i < reindeer.length; i++) {
    moves += Math.abs(reindeer[i] - stables[i]);
  }

  return moves;
}

module.exports = { minMovesToStables };
