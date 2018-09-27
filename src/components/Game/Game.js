/*
 * You do not need to separate components and containers.
 * Feel free to connect your state and components directly in here (or other components).
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Board from '../Board/Board';

import './Game.css';

import { createBoard, setPlayerName } from '../../store/actions';
import Board from '../Board/Board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // displayErrors: false,
      player1: '',
      player2: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { player1, player2 } = this.state;
    const { updatePlayers } = this.props;
    e.preventDefault();
    if (!e.target.checkValidity()) {
      this.setState({
        // displayErrors: true,
      });
    } else {
      updatePlayers({ 1: player1, 2: player2 });
    }
  }

  renderForm = () => {
    const { displayErrors, player1, player2 } = this.state;
    return (
      <React.Fragment>
        <h2>Enter player names</h2>
        <form
          onSubmit={this.handleSubmit}
          noValidate
          className={displayErrors ? 'displayErrors' : ''}
        >
          <div className="Game__User--field">
            <label htmlFor="player1">
              First Player Name
              <input
                type="text"
                key="player1"
                name="player1"
                placeholder="Enter player name here"
                required
                value={player1}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="Game__User--field">
            <label htmlFor="player2">
              Second Player Name
              <input
                type="text"
                key="player2"
                name="player2"
                placeholder="Enter player name here"
                required
                value={player2}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="Game__User--submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </React.Fragment>
    );
  }

  render() {
    const { players } = this.props;
    return (
      <div>
        <header>TicTacToe</header>
        <div className="Game">
          {
            players ? <Board /> : this.renderForm()
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activePlayer: state.activePlayer,
  winner: state.winner,
  players: state.players,
});

const mapDispatchToProps = dispatch => ({
  reInitateBoard: () => dispatch(createBoard()),
  updatePlayers: players => dispatch(setPlayerName(players)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
