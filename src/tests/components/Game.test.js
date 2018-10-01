import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';

import Game from '../../components/Game/Game.js';

describe('<Game /> with initial state', () => {
  let wrapper;

  const initialState = {
    board: [],
    activePlayer: null,
    winner: null,
    players: null,
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('should have a `<form>` element', () => {
    wrapper = mount(<Game store={store}/>);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('check Prop matches with initialState', () => {
    wrapper = shallow(<Game store={store}/>);
    expect(wrapper.prop('activePlayer')).toEqual(initialState.activePlayer)
 });

  it('renders a player1 name input', () => {
    wrapper = mount(<Game store={store}/>);
    expect(wrapper.find('[name="player1"]').length).toEqual(1)
  });

  it('should render to static HTML', function() {
    expect(render(<Game store={store}/>).text())
    .toEqual('TicTacToeEnter player namesFirst Player NameSecond Player NameSubmit');
  });

  it('renders correctly with User Form', () => {
    const tree = renderer
      .create(<Game store={store}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Game /> with players', () => {
  let wrapper;

  const initialState = {
    board: [null, null, null, null, null, null, null, null, null],
    activePlayer: 1,
    winner: null,
    players: {1: 'John', 2: 'Ashok'},
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const options = {
    context: { store }, 
  }

  it('should hide form and load the board component once players updated in the state',() => {
    wrapper = mount(<Game store={store}/>, options);
    expect(wrapper.find('div.Field').length).toEqual(9)
  })

  it('should hide the form text',() => {
    expect(render(<Game store={store}/>, options).text())
    .toEqual('TicTacToeNext Player:John');
  })

  it('should set players in the state', () => {
    wrapper = mount(<Game store={store}/>, options);
    expect(wrapper.props().store.getState().players['2']).toEqual('Ashok');
  });

});