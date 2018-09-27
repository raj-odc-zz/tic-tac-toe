import React, { Component } from 'react';
import { connect } from 'react-redux';

import Square from '../Square/Square';

import './Board.css';

import { createBoard, updateSquareAndPlayer } from '../../store/actions';

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Board extends Component {
  componentDidMount() {
    const { initiateBoard } = this.props;
    initiateBoard();
  }

  handleClick = (id) => {
    const { onSquareClick, winner } = this.props;
    if (winner) return;
    onSquareClick(id);
  }

  render() {
    const {
      activePlayer, board, initiateBoard, players, winner,
    } = this.props;
    return (
      <React.Fragment>
        {
          winner ? (
            <React.Fragment>
              <div className="Game__nextPlayer">
                Winner is:
                {winner}
              </div>
              <button type="button" onClick={initiateBoard}>Play Again</button>
            </React.Fragment>
          )
            : (
              <div className="Game__nextPlayer">
                Next Player:
                {players[activePlayer]}
              </div>
            )
        }
        <div className="Board">
          {
            squares.map(id => (
              <Square
                onClick={() => this.handleClick(id)}
                squareValue={board[id]}
                squareIndex={id}
                key={id}
              />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  activePlayer: state.activePlayer,
  board: state.board,
  winner: state.winner,
  players: state.players,
});

const mapDispatchToProps = dispatch => ({
  onSquareClick: squareIndex => dispatch(updateSquareAndPlayer(squareIndex)),
  initiateBoard: () => dispatch(createBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
