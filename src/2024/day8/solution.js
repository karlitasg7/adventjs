function drawRace(indices, length) {
  let result = "";

  for (let i = 0; i < indices.length; i++) {
    let line = "~".repeat(length);

    if (indices[i] > 0) {
      line = line.slice(0, indices[i]) + "r" + line.slice(indices[i] + 1);
    }
    if (indices[i] < 0) {
      line =
        line.slice(0, length + indices[i]) +
        "r" +
        line.slice(length + indices[i] + 1);
    }

    result += " ".repeat(indices.length - i - 1) + line + " /" + (i + 1) + "\n";
  }

  return result.substring(0, result.length - 1);
}

module.exports = { drawRace };
