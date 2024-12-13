function isRobotBack(moves) {
  const REVERSE = {
    R: "L",
    L: "R",
    U: "D",
    D: "U",
  };

  const MODIFIERS = {
    "*": {
      R: { x: 2, y: 0 },
      L: { x: -2, y: 0 },
      U: { x: 0, y: 2 },
      D: { x: 0, y: -2 },
    },
    "!": {
      R: { x: 1, y: 0 },
      L: { x: -1, y: 0 },
      U: { x: 0, y: 1 },
      D: { x: 0, y: -1 },
    },
    "?": {
      R: { x: 1, y: 0 },
      L: { x: -1, y: 0 },
      U: { x: 0, y: 1 },
      D: { x: 0, y: -1 },
    },
  };

  const PREVIOUS = {};

  let positionX = 0;
  let positionY = 0;

  let lastModifier = "";

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    if (MODIFIERS[move]) {
      lastModifier = move;
      continue;
    }

    if (lastModifier === "") {
      positionX += MODIFIERS["!"][move].x;
      positionY += MODIFIERS["!"][move].y;
    } else {
      if (lastModifier == "?" && PREVIOUS[move]) {
        lastModifier = "";
        continue;
      }

      if (lastModifier == "!") {
        move = REVERSE[move];
      }

      positionX += MODIFIERS[lastModifier][move].x;
      positionY += MODIFIERS[lastModifier][move].y;
    }

    PREVIOUS[move] = true;
    lastModifier = "";
  }

  return positionX == 0 && positionY == 0 ? true : [positionX, positionY];
}

module.exports = { isRobotBack };
