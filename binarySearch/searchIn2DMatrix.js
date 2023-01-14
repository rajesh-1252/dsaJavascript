function searchInMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row < matrix.length) {
    if (target === matrix[row][col]) {
      return [row, col];
    }
    if (target > matrix[row][col]) {
      row++;
    } else {
      col--;
    }
  }
  return [-1, -1];
}
console.log(
  searchInMatrix(
    [
      //   [1, 2, 3, 4, 5],
      //   [6, 7, 8, 9, 10],
      //   [11, 12, 13, 14, 15],
      //   [16, 17, 18, 19, 20],
      //   [21, 22, 23, 24, 25],
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
      //   [1, 3],
      //   [1, 3, 5],
    ],
    7
  )
);
