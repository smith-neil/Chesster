import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import PrimaryNavigation from '.';

const wrap = (props = {}) => shallow(
  <MemoryRouter>
    <PrimaryNavigation />
  </MemoryRouter>
);

describe('PrimaryNavigtaion', () => {
  it('should mount', () => {
    mount(
      <MemoryRouter>
        <PrimaryNavigation />
      </MemoryRouter>
    );
  });
});