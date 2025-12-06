function matchGloves(gloves) {
  const result = {};

  for (const glove of gloves) {
    if (!result[glove.color]) {
      result[glove.color] = { L: 0, R: 0 };
    }

    result[glove.color][glove.hand]++;
  }

  const pairs = [];
  for (const glove in result) {
    const min = Math.min(result[glove].L, result[glove].R);
    for (let i = 0; i < min; i++) {
      pairs.push(glove);
    }
  }

  return pairs;
}

module.exports = { matchGloves };
