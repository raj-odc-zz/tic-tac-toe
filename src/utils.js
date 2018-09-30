export function generateBoard(squareLimit = 9) {
  const squares = [];
  for (let i = 0; i < squareLimit; i += 1) {
    squares.push(null);
  }
  return squares;
}

export function isRowValueSame(s1, s2, s3) {
  if (s1 === null || s2 === null || s3 === null) return null;
  if (s1 === s2 && s1 === s3) {
    return s1;
  }
  return null;
}

export function findWinner(board) {
  let allSquareField = true;
  for (let i = 0; i < board.length; i += 1) {
    if (!board[i]) {
      allSquareField = false;
      break;
    }
  }

  const winner = isRowValueSame(board[0], board[1], board[2])
              || isRowValueSame(board[0], board[3], board[6])
              || isRowValueSame(board[0], board[4], board[8])
              || isRowValueSame(board[1], board[4], board[7])
              || isRowValueSame(board[2], board[5], board[8])
              || isRowValueSame(board[2], board[4], board[6])
              || isRowValueSame(board[3], board[4], board[5])
              || isRowValueSame(board[6], board[7], board[8]);

  if (winner !== null) return winner;

  if (winner === null && allSquareField) {
    return 'draw';
  }

  return null;
}
