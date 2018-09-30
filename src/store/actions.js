import { findWinner } from '../utils';

import * as types from './actionType';

export function createBoard() {
  return {
    type: types.CREATE_BOARD,
  };
}

export function setPlayerName(players) {
  return {
    type: types.SET_PLAYER_NAME,
    players,
  };
}

export function setSquareValue(squareIndex, playerNumber) {
  return {
    type: types.SET_SQUARE_VALUE,
    squareIndex,
    playerNumber,
  };
}

export function setActivePlayer(playerNumber) {
  return {
    type: types.SET_ACTIVE_PLAYER,
    playerNumber,
  };
}

export function setWinner(player) {
  return {
    type: types.SET_WINNER,
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
