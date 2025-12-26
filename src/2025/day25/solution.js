function execute(code) {
  let value = 0;
  let position = 0;

  // Pre-calculate jump points to ensure O(n) complexity and handle nesting
  const jumpMap = new Map();
  const stack = [];

  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    if (char === "[" || char === "{") {
      stack.push(i);
    } else if (char === "]" || char === "}") {
      const openIndex = stack.pop();
      jumpMap.set(openIndex, i);
      jumpMap.set(i, openIndex);
    }
  }

  // Optimized execution loop with reduced cyclomatic complexity
  while (position < code.length) {
    const command = code[position];

    switch (command) {
      case "+":
        value++;
        break;
      case "-":
        value--;
        break;
      case "[":
      case "{":
        if (value === 0) position = jumpMap.get(position);
        break;
      case "]":
        if (value !== 0) position = jumpMap.get(position);
        break;
    }

    position++;
  }

  return value;
}

module.exports = { execute };
