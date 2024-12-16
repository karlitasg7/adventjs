function drawTable(data) {
  const keys = Object.keys(data[0]);
  const headers = keys.map((key) => key.charAt(0).toUpperCase() + key.slice(1));

  const maxLengths = keys.map((key) =>
    Math.max(key.length, ...data.map((row) => String(row[key]).length))
  );

  const header = `+${keys
    .map((key, i) => "-".repeat(maxLengths[i] + 2))
    .join("+")}+`;

  const headerRow = `| ${keys
    .map((key, i) => headers[i].padEnd(maxLengths[i]))
    .join(" | ")} |\n`;

  const rows = data
    .map(
      (row) =>
        `|${
          keys
            .map((key, i) => " " + String(row[key]).padEnd(maxLengths[i]) + " ")
            .join("|") + "|"
        }`
    )
    .join("\n");

  return `${header}\n${headerRow}${header}\n${rows}\n${header}`;
}

module.exports = { drawTable };
