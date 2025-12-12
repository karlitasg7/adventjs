function findGiftPath(workshop, gift) {
  function search(obj, currentPath) {
    for (const key of Object.keys(obj)) {
      const newPath = [...currentPath, key];

      if (obj[key] === gift) {
        return newPath;
      }

      if (typeof obj[key] === "object" && obj[key] !== null) {
        const result = search(obj[key], newPath);
        if (result.length > 0) {
          return result;
        }
      }
    }

    return [];
  }

  const path = search(workshop, []);
  return path;
}

module.exports = { findGiftPath };
