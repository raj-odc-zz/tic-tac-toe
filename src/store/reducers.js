import { generateBoard } from '../utils';

export default function GameStore(state = {
  board: [],
  activePlayer: null,
  winner: null,
}, action) {
  switch (action.type) {
    case 'CREATE_BOARD':
      return Object.assign({}, state, {
        board: generateBoard(),
        activePlayer: 1,
        winner: null,
      });

    case 'SET_FIELD_VALUE':
      return Object.assign({}, state, {
        board: state.board.map((square, index) => {
          if (index === action.squareIndex) {
            return action.playerNumber;
          }
          return square;
        }),
      });

    case 'SET_ACTIVE_PLAYER':
      return Object.assign({}, state, {
        activePlayer: action.playerNumber,
      });

    case 'SET_WINNER':
      return Object.assign({}, state, {
        winner: action.playerNumber,
      });

    default:
      return state;
  }
}
