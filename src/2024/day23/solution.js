function findMissingNumbers(nums) {
  const max = Math.max(...nums);
  const fullSet = new Set(Array.from({ length: max }, (_, i) => i + 1));
  const numsSet = new Set(nums);
  const missing = fullSet.difference(numsSet);
  return [...missing];
}

module.exports = { findMissingNumbers };
