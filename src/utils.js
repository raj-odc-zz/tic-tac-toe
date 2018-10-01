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

  const winnerCombination = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let winner = null;
  for (let i = 0; i < winnerCombination.length; i += 1) {
    const [a, b, c] = winnerCombination[i];
    winner = isRowValueSame(board[a], board[b], board[c]);
    if (winner !== null) {
      break;
    }
  }

  if (winner !== null) return winner;

  if (winner === null && allSquareField) {
    return 'draw';
  }

  return null;
}
