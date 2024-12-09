function fixPackages(packages) {
  const regex = /\(([^\(\)]+)\)/;
  const match = packages.match(regex);

  return match
    ? fixPackages(
        packages.replace(match[0], match[1].split("").reverse().join(""))
      )
    : packages;
}

module.exports = { fixPackages };
