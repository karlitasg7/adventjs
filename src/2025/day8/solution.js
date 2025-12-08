function findUniqueToy(toy) {
  const toyArray = toy.toLowerCase().split("");
  const toyMap = new Map();
  for (const toy of toyArray) {
    toyMap.set(toy, (toyMap.get(toy) || 0) + 1);
  }
  for (const letter of toy) {
    if (toyMap.get(letter.toLowerCase()) === 1) {
      return letter;
    }
  }
  return "";
}

module.exports = { findUniqueToy };
