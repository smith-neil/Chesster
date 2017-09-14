import React from 'react';
import { mount, shallow } from 'enzyme';

import Header from '.';

const wrap = (props = {}) => shallow(
  <Header {...props}></Header>
);

describe('Header', () => {
  it('should render', () => {
    mount(<Header />);
  });

  it('should render props when passed in', () => {
    const wrapper = wrap({ id: 'foo' });

    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});