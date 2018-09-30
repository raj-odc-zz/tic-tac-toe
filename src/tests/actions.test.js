import * as actions from '../store/actions';

import * as types from '../store/actionType';

describe('actions', () => {
  it('should create an action to add a board', () => {
    const expectedAction = {
      type: types.CREATE_BOARD
    };
    expect(actions.createBoard()).toEqual(expectedAction);
  });

  it('should set a player name', () => {
    const players = {1: 'John', 2: 'Ashok'}
    const expectedAction = {
      type: types.SET_PLAYER_NAME,
      players
    };
    expect(actions.setPlayerName(players)).toEqual(expectedAction);
  });

  it('should update square value', () => {
    const squareIndex=0;
    const playerNumber=2;
    const expectedAction = {
      type: types.SET_SQUARE_VALUE,
      squareIndex,
      playerNumber
    };
    expect(actions.setSquareValue(squareIndex, playerNumber)).toEqual(expectedAction);
  });
  
  it('should set active player', () => {
    const playerNumber=2;
    const expectedAction = {
      type: types.SET_ACTIVE_PLAYER,
      playerNumber
    };
    expect(actions.setActivePlayer(playerNumber)).toEqual(expectedAction);
  });

  it('should set winner', () => {
    const player="John";
    const expectedAction = {
      type: types.SET_WINNER,
      player
    };
    expect(actions.setWinner(player)).toEqual(expectedAction);
  });
})