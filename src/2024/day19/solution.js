function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  const boxes = [];

  let remainingWeight = weight;

  while (remainingWeight > 0) {
    const boxWeight = [10, 5, 2, 1].find((w) => w <= remainingWeight);

    const [bottom, ...rest] = boxRepresentations[boxWeight].slice().reverse();

    const last = boxes.shift();

    const newBottom = `${bottom}${last?.slice(bottom.length, -1) ?? ""}`;

    boxes.unshift(...[newBottom, ...rest].reverse());

    remainingWeight -= boxWeight;
  }

  return boxes.join("\n");
}

module.exports = { distributeWeight };
