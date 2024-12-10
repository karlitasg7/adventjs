function compile(instructions) {
  const registers = {};
  let instructionsIndex = 0;

  while (instructionsIndex < instructions.length) {
    const [command, x, y] = instructions[instructionsIndex].split(" ");
    registers[x] ??= 0;

    switch (command) {
      case "MOV":
        if (isNaN(x)) {
          registers[y] = registers[x];
        } else {
          registers[y] = parseInt(x);
        }
        break;

      case "INC":
        registers[x]++;
        break;

      case "DEC":
        registers[x]--;
        break;

      case "JMP":
        if (registers[x] === 0) {
          instructionsIndex = parseInt(y);
          continue;
        }
        break;
    }

    instructionsIndex++;
  }

  return registers.A;
}

module.exports = { compile };
