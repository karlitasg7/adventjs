function organizeShoes(shoes) {
  const shoesMap = {};
  const result = [];
  const shoesTypes = { I: "R", R: "I" };

  shoes.forEach(({ type, size }) => {
    shoesMap[size] ??= { I: 0, R: 0 };
    shoesMap[size][type]++;
    if (shoesMap[size][type] > 0 && shoesMap[size][shoesTypes[type]] > 0) {
      result.push(size);
      shoesMap[size][type]--;
      shoesMap[size][shoesTypes[type]]--;
    }
  });
  return result;
}

module.exports = { organizeShoes };
