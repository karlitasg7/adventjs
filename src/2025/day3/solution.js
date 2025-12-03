function drawGift(size, symbol) {
  if (size < 2) return "";

  let result = symbol.repeat(size) + "\n";

  for (let row = 1; row < size - 1; row++) {
    result += symbol + " ".repeat(size - 2) + symbol + "\n";
  }

  result += symbol.repeat(size);

  return result;
}

module.exports = { drawGift };
