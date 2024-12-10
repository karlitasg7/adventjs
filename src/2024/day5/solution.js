function organizeShoes(shoes) {
  const result = [];
  const groups = {};

  for (const shoe of shoes) {
    const { size, type } = shoe;
    groups[size] ??= { I: 0, R: 0 };
    groups[size][type]++;
  }

  for (const size in groups) {
    const { I, R } = groups[size];
    if (I > 0 && R > 0) {
      result.push(...Array(Math.min(I, R)).fill(Number(size)));
    }
  }

  return result;
}

module.exports = { organizeShoes };
