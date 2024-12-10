function organizeInventory(inventory) {
  const result = {};

  for (const { category, name, quantity } of inventory) {
    result[category] = result[category] ??= {};
    result[category][name] = (result[category][name] || 0) + quantity;
  }

  return result;
}

module.exports = { organizeInventory };
