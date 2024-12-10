function decodeFilename(filename) {
  const indexOf = filename.indexOf("_");
  return filename.substring(indexOf + 1, filename.lastIndexOf("."));
}

module.exports = { decodeFilename };
