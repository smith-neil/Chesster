import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from '.';

const wrap = () => shallow(
  <MemoryRouter>
    <NotFoundPage />
  </MemoryRouter>
);

describe('NotFoundPage', () => {
  it('should mount', () => {
    mount(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
  });
});