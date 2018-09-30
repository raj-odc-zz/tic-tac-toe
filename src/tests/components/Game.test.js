import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import configureStore from 'redux-mock-store';

import Game from '../../components/Game/Game.js';

const initialState = {
  board: [],
  activePlayer: null,
  winner: null,
  players: null,
};
const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Game />', () => {
  let wrapper;

  beforeEach(() => {
     wrapper = shallow(<Game store={store}/>);
  });

  it('should have a `<form>` element', () => {
    wrapper = mount(<Game store={store}/>);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render the Game component', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('check Prop matches with initialState', () => {
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
});
