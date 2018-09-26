import React, { Component } from 'react';
import { connect } from 'react-redux';

import Square from './Square';

import { createBoard, updateSquareAndPlayer } from '../store/actions';

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Board extends Component {
  componentDidMount() {
    const { initiateBoard } = this.props;
    initiateBoard();
  }

  render() {
    const { onSquareClick, board } = this.props;
    return (
      <div className="Board">
        {
          squares.map(id => (
            <Square
              onClick={() => onSquareClick(id)}
              squareValue={board[id]}
              squareIndex={id}
              key={id}
            />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board,
  winner: state.winner,
});

const mapDispatchToProps = dispatch => ({
  onSquareClick: squareIndex => dispatch(updateSquareAndPlayer(squareIndex)),
  initiateBoard: () => dispatch(createBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
