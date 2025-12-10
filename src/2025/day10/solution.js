function maxDepth(s) {
  let count = 0;
  let depth = 0;

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push(s[i]);
      count++;
    } else if (s[i] === "]") {
      if (stack.length === 0) {
        return -1;
      }

      stack.pop();
      depth = Math.max(depth, count);
      count--;
    }
  }

  return stack.length > 0 ? -1 : depth;
}

module.exports = { maxDepth };
