import * as React from 'react';
import { mount } from 'enzyme';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import Board from '../../components/Board/Board.js';

describe('<Board /> with players', () => {

  let wrapper;
  const middlewares = [ thunk ];
  
  let initialState = {
    board: [null, null, null, null, null, null, null, null, null],
    activePlayer: 1,
    winner: null,
    players: {1: 'John', 2: 'Ashok'},
  };
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  it('should load the next player as John',() => {
    wrapper = mount(<Board store={store}/>);
    expect(wrapper.find('div.player__section').text()).toEqual('Next Player:John');
  });

  it('should load the next player as Ashok',() => {
    initialState.activePlayer = 2;
    const wrapper = mount(<Board store={store}/>);
    expect(wrapper.find('div.player__section').text()).toEqual('Next Player:Ashok');
  });

  it('should load the winner section when state has winner',() => {
    initialState.winner = "Ashok";
    const wrapper = mount(<Board store={store}/>);
    expect(wrapper.find('div.winner__section--text').text()).toEqual('Player Ashok won');
  });
});