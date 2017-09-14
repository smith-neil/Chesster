import React from 'react';
import { mount, shallow } from 'enzyme';

import Hero from '.';

const wrap = (props = {}) => shallow(
  <Hero {...props} />
);

describe('Hero', () => {
  it('should mount', () => {
    mount(<Hero />)
  });

  it('should render props when passed in', () => {
    const wrapper = wrap({ id: 'foo' });

    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});