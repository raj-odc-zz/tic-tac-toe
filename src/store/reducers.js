import { generateBoard } from '../utils';

import * as types from './actionType';

export default function GameStore(state = {
  board: [],
  activePlayer: null,
  winner: null,
  players: null,
}, action) {
  switch (action.type) {
    case types.CREATE_BOARD:
      return Object.assign({}, state, {
        board: generateBoard(),
        activePlayer: 1,
        winner: null,
      });

    case types.SET_PLAYER_NAME:
      return Object.assign({}, state, {
        players: action.players,
      });

    case types.SET_SQUARE_VALUE:
      return Object.assign({}, state, {
        board: state.board.map((square, index) => {
          if (index === action.squareIndex) {
            return action.playerNumber;
          }
          return square;
        }),
      });

    case types.SET_ACTIVE_PLAYER:
      return Object.assign({}, state, {
        activePlayer: action.playerNumber,
      });

    case types.SET_WINNER:
      return Object.assign({}, state, {
        winner: action.player,
      });

    default:
      return state;
  }
}
