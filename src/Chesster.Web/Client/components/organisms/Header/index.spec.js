import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Header from '.';

const wrap = (props = {}) => shallow(
  <MemoryRouter>
    <Header {...props}></Header>
  </MemoryRouter>
);

describe('Header', () => {
  it('should render', () => {
    mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);
  });

  it('should render props when passed in', () => {
    const wrapper = wrap({ id: 'foo' });

    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});