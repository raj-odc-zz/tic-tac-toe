/*
 * You do not need to separate components and containers.
 * Feel free to connect your state and components directly in here (or other components).
 */
import React from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import { createBoard } from '../store/actions';

const Game = (props) => {
  const { activePlayer, reInitateBoard } = props;
  return (
    <div>
      <header>TicTacToe</header>
      <div className="Game">
        <div className="Game__nextPlayer">
          Next Player
          {activePlayer}
        </div>
        <button type="button" onClick={reInitateBoard}>Play Again</button>
        <Board />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  activePlayer: state.activePlayer,
  winner: state.winner,
});

const mapDispatchToProps = dispatch => ({
  reInitateBoard: () => dispatch(createBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
