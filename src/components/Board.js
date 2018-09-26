import React, { Component } from 'react';
import { connect } from 'react-redux';

import Square from './Square';

import Action from '../store/actions';

const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 0,
    };
  }

  componentDidMount() {
    const { createBoard } = this.props;
    createBoard();
  }

  render() {
    const { currentPlayer } = this.state;
    const { onSquareClick } = this.props;
    return (
      <div className="Board">
        {
          squares.map(id => (
            <Square
              onClick={() => onSquareClick(id)}
              squareValue={currentPlayer}
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
  onSquareClick: squareIndex => dispatch(Action.setSquareValueAndChangeActivePlayer(squareIndex)),
  createBoard: () => dispatch(Action.createBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
