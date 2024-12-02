function createFrame(names) {
  const maxLength = names.reduce((max, name) => Math.max(max, name.length), 0);

  let result = "*".repeat(maxLength + 4) + "\n";

  names.forEach((name) => {
    const spaces = " ".repeat(maxLength - name.length);
    result += `* ${name}${spaces} *\n`;
  });

  result += "*".repeat(maxLength + 4);
  return result;
}

module.exports = { createFrame };
