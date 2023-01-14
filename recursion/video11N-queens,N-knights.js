// N- queens

const queens = (board, row) => {
  if (row === board.length) {
    display(board);
    return 1;
  }
  let count = 0;
  //   placing the queen and checking for every row and col
  for (let col = 0; col < board.length; col++) {
    // place the queen if it is safe
    if (isSafe(board, row, col)) {
      board[row][col] = true;
      count += queens(board, row + 1);
      // queens(board, row + 1);
      board[row][col] = false;
    }
  }
  return count;
};

const isSafe = (board, row, col) => {
  // check vertical row
  for (let i = 0; i < row; i++) {
    if (board[i][col]) {
      return false;
    }
  }
  // diagonal left
  let maxLeft = Math.min(row, col);
  for (let i = 1; i <= maxLeft; i++) {
    if (board[row - i][col - i]) {
      return false;
    }
  }
  // diagonal right
  let maxRight = Math.min(row, board.length - col - 1);
  for (let i = 1; i <= maxRight; i++) {
    if (board[row - i][col + i]) {
      return false;
    }
  }
  return true;
};

const display = (board) => {
  let str = "";
  for (let row of board) {
    for (let element of row) {
      if (element) {
        str += "Q";
      } else {
        str += "X";
      }
    }
    str += "\n";
  }
  console.log(str);
};

let board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

console.log(queens(board, 0));
