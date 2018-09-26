import React, { Component } from 'react';
import { connect } from 'react-redux';

import Field from './Field';

import Action from '../store/actions';

const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
    return (
      <div className="Board">
        {
          fields.map(id => (
            <Field
              onClick={() => {}}
              fieldValue={currentPlayer}
              fieldIndex={id}
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
  createBoard: () => dispatch(Action.createBoard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
