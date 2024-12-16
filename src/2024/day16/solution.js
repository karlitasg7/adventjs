function removeSnow(s) {
  const regex = /(\w)\1/g;
  let result = s;
  while (regex.test(result)) {
    result = result.replace(regex, "");
  }
  return result;
}

module.exports = { removeSnow };
