function organizeShoes(shoes) {
  const groups = shoes.reduce((acc, shoe) => {
    if (!acc[shoe.size]) {
      acc[shoe.size] = { I: 0, R: 0 };
    }
    acc[shoe.size][shoe.type]++;
    return acc;
  }, {});

  const filterGroups = Object.keys(groups)
    .filter((key) => groups[key].R > 0 && groups[key].I > 0)
    .map(Number);

  const finalResponse = [];

  for (let i = 0; i < filterGroups.length; i++) {
    const val = Math.min(groups[filterGroups[i]].I, groups[filterGroups[i]].R);
    finalResponse.push(...Array(val).fill(filterGroups[i]));
  }

  return finalResponse;
}

module.exports = { organizeShoes };
