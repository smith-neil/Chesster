import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import HomePage from '.';

const wrap = (props = {}) => shallow(
  <MemoryRouter>
    <HomePage {...props}>home</HomePage>
  </MemoryRouter>
);

describe('HomePage', () => {
  it('should render', () => {
    mount(
      <MemoryRouter>
        <HomePage>home</HomePage>
      </MemoryRouter>
    );
  });
});