function execute(code) {
  let value = 0;
  let pos = 0;
  const codes = code.split("");
  let bucleRun = 0;

  const exec = {
    "+": () => {
      value = value + 1;
      pos++;
    },
    "-": () => {
      value = value - 1;
      pos++;
    },
    ">": () => {
      pos++;
    },
    "[": () => {
      const end = codes.indexOf("]", pos);
      pos = end + 1;
      value = 0;
    },
    "{": () => {
      const end = codes.indexOf("}", pos);
      if (value === 0) {
        pos = end + 1;
      } else {
        pos++;
      }
    },
    "}": () => {
      pos++;
    },
  };

  while (pos < codes.length) {
    const char = codes[pos];
    if (exec[char]) exec[char]();
  }
  return value;
}

module.exports = { execute };
