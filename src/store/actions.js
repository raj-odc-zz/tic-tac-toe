import { findWinner } from '../utils';

export function createBoard() {
  return {
    type: 'CREATE_BOARD',
  };
}

export function setPlayerName(players) {
  return {
    type: 'SET_PLAYER_NAME',
    players,
  };
}

export function setSquareValue(squareIndex, playerNumber) {
  return {
    type: 'SET_FIELD_VALUE',
    squareIndex,
    playerNumber,
  };
}

export function setActivePlayer(playerNumber) {
  return {
    type: 'SET_ACTIVE_PLAYER',
    playerNumber,
  };
}

export function setWinner(player) {
  return {
    type: 'SET_WINNER',
    player,
  };
}

export function updateSquareAndPlayer(squareIndex) {
  return (dispatch, getState) => {
    const playerNumber = getState().activePlayer;
    const currentSquareValue = getState().board[squareIndex];
    if (currentSquareValue) {
      return;
    }
    dispatch(setSquareValue(squareIndex, playerNumber));
    const nextPlayerNumber = playerNumber === 1 ? 2 : 1;
    let winner = findWinner(getState().board);
    if (winner) {
      const { players } = getState();
      winner = players[winner] || 'Draw';
      dispatch(setWinner(winner));
    } else {
      dispatch(setActivePlayer(nextPlayerNumber));
    }
  };
}
