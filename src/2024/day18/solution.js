function findInAgenda(agenda, phone) {
  const response = [];

  for (const row of agenda.split("\n")) {
    const numberStart = row.indexOf("+");
    if (numberStart === -1) {
      continue;
    }

    const numberPossibleEnd = row.indexOf(" ", numberStart);
    const numberEnd = numberPossibleEnd === -1 ? row.length : numberPossibleEnd;
    const number = row.substring(numberStart, numberEnd);

    if (!number.includes(phone)) {
      continue;
    }

    const nameStart = row.indexOf("<");
    const nameEnd = row.indexOf(">");
    const name = row.substring(nameStart + 1, nameEnd);
    const address = row.replace(number, "").replace(`<${name}>`, "").trim();
    response.push({ name, address });
  }

  if (response.length === 1) {
    return response[0];
  }

  return null;
}

module.exports = { findInAgenda };
