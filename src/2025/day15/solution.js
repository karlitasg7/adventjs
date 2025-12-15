function drawTable(data, sortBy) {
  if (data.length === 0) {
    return "";
  }

  data.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB);
    } else {
      return valueA - valueB;
    }
  });

  // get max length for each column
  const columnsWithMaxLength = {};

  data.forEach((row) => {
    Object.keys(row).forEach((key) => {
      const value = String(row[key]);
      const length = value.length;
      if (!columnsWithMaxLength[key]) {
        columnsWithMaxLength[key] = length;
      } else {
        columnsWithMaxLength[key] = Math.max(columnsWithMaxLength[key], length);
      }
    });
  });

  let rowBorder = "+";
  let rowHeaders = "|";
  let letter = 65;

  Object.keys(data[0]).forEach((key) => {
    const length = columnsWithMaxLength[key];
    rowBorder += "-".repeat(length + 2) + "+";
    rowHeaders += " " + String.fromCharCode(letter).padEnd(length) + " |";
    letter++;
  });

  return (
    rowBorder +
    "\n" +
    rowHeaders +
    "\n" +
    rowBorder +
    "\n" +
    data
      .map((row) => {
        let rowResult = "|";
        Object.keys(row).forEach((key) => {
          const value = String(row[key]);
          const length = columnsWithMaxLength[key];
          rowResult += " " + value.padEnd(length) + " |";
        });
        return rowResult;
      })
      .join("\n") +
    "\n" +
    rowBorder
  );
}

module.exports = { drawTable };
