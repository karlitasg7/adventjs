function hasFourInARow(board) {
  const RED = "R";
  const GREEN = "G";

  const directions = [
    [0, 1], // Horizontal
    [1, 0], // Vertical
    [1, 1], // Diagonal derecha
    [1, -1], // Diagonal izquierda
  ];

  const rows = board.length;
  const cols = board[0]?.length || 0;

  const isValidPosition = (row, col) => {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  };

  const checkFromPosition = (i, j) => {
    const color = board[i][j];

    if (color !== RED && color !== GREEN) {
      return false;
    }

    return directions.some(([deltaRow, deltaCol]) => {
      const endRow = i + 3 * deltaRow;
      const endCol = j + 3 * deltaCol;

      // Validar posición final antes de revisar toda la secuencia
      if (!isValidPosition(endRow, endCol)) {
        return false;
      }

      // Verificar las 4 posiciones en línea usando every()
      return [0, 1, 2, 3].every(
        (k) => board[i + k * deltaRow]?.[j + k * deltaCol] === color
      );
    });
  };

  // Iterar sobre todas las posiciones
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (checkFromPosition(i, j)) {
        return true;
      }
    }
  }

  return false;
}

module.exports = { hasFourInARow };
