function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0;
  if (gifts.some((gift) => gift > maxWeight)) return null;

  let sleighs = 0;
  let currentWeight = 0;
  for (let i = 0; i < gifts.length; i++) {
    if (currentWeight + gifts[i] > maxWeight) {
      sleighs++;
      currentWeight = 0;
    }
    currentWeight += gifts[i];
  }

  if (currentWeight > 0) sleighs++;
  return sleighs;
}

module.exports = { packGifts };
