import * as React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Square from '../../components/Square/Square.js';

describe('<Square />', () => {
  let wrapper;

  it('should load the default square',() => {
    wrapper = mount(<Square squareValue={null} onClick={() => {}} squareIndex={1} />);
    expect(wrapper.find('.Field').length).toEqual(1)
  })

  it('should update with class is-player-1',() => {
    wrapper = mount(<Square squareValue={1} onClick={() => {}} squareIndex={1} />);
    expect(wrapper.find('.is-player-1').length).toEqual(1)
  })

  it('should update with class is-player-2',() => {
    wrapper = mount(<Square squareValue={2} onClick={() => {}} squareIndex={1} />);
    expect(wrapper.find('.is-player-2').length).toEqual(1)
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<Square squareValue={2} onClick={() => {}} squareIndex={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});