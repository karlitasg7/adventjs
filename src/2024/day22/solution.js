function generateGiftSets(gifts) {
  const response = [];
  function backtracking(idx = 0, curr = []) {
    if (curr.length > 0) {
      response.push([...curr]);
    }

    for (let i = idx; i < gifts.length; i++) {
      curr.push(gifts[i]);
      backtracking(i + 1, curr);
      curr.pop();
    }
  }

  backtracking();

  return response.sort((a, b) => a.length - b.length);
}

module.exports = { generateGiftSets };
