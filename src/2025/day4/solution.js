function decodeSantaPin(code) {
  let result = "";
  const regex = /\[([^\]]+)\]/g;
  const groups = [...code.matchAll(regex)].map((match) => match[1]);

  let lastGroupDigit = "";
  let lastGroupOperations = [];
  groups.forEach((group) => {
    let firstDigit = group.charAt(0);
    let operations = group.slice(1).split("");

    if (firstDigit == "<") {
      firstDigit = lastGroupDigit;
      operations = lastGroupOperations;
    } else {
      lastGroupDigit = firstDigit;
      lastGroupOperations = operations;
    }

    let currentDigit = parseInt(firstDigit);
    operations.forEach((operation) => {
      if (operation == "+") {
        currentDigit++;
      } else if (operation == "-") {
        currentDigit--;
      }
    });

    const digit = ((currentDigit % 10) + 10) % 10;
    result += digit;
  });

  return result.length < 4 ? null : result;
}

module.exports = { decodeSantaPin };
