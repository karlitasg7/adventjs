function calculatePrice(ornaments) {
  const PRICES = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  return ornaments.split("").reduce((acc, current, index, array) => {
    if (!PRICES[current]) return;
    if (PRICES[array[index + 1]] > PRICES[current]) {
      return acc - PRICES[current];
    }

    return acc + PRICES[current];
  }, 0);
}

module.exports = { calculatePrice };
