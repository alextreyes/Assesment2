function unroll(squareArray) {
  const result = [];
  let startRow = 0;
  let endRow = squareArray.length - 1;
  let startCol = 0;
  let endCol = squareArray[0].length - 1;

  // Continue until we cover all rows and columns
  while (startRow <= endRow && startCol <= endCol) {
    // move from  the top row from left to right
    for (let col = startCol; col <= endCol; col++) {
      result.push(squareArray[startRow][col]);
    }
    startRow++;

    // move from  the right column from top to bottom
    for (let row = startRow; row <= endRow; row++) {
      result.push(squareArray[row][endCol]);
    }
    endCol--;

    // move from  the bottom row from right to left, if still inside the array
    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        result.push(squareArray[endRow][col]);
      }
      endRow--;
    }

    // move from the left column from bottom to top, if still inside the array
    if (startCol <= endCol) {
      for (let row = endRow; row >= startRow; row--) {
        result.push(squareArray[row][startCol]);
      }
      startCol++;
    }
  }
  return result;
}

module.exports = unroll;
