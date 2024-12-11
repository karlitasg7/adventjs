function calculatePrice(ornaments) {
  const PRICES = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  let sum = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const currentPrice = PRICES[ornaments[i]];
    if (currentPrice === undefined) return undefined;

    const nextPrice = PRICES[ornaments[i + 1]];

    if (nextPrice !== undefined && nextPrice > currentPrice) {
      sum -= currentPrice;
    } else {
      sum += currentPrice;
    }
  }

  return sum;
}

module.exports = { calculatePrice };
