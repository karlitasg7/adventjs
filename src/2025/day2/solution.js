function manufactureGifts(giftsToProduce) {
  return giftsToProduce.flatMap((gift) =>
    gift.quantity > 0 ? Array(gift.quantity).fill(gift.toy) : []
  );
}

module.exports = { manufactureGifts };
