import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import AboutPage from '.';

const wrap = (props = {}) => shallow(
  <MemoryRouter>
    <AboutPage {...props}>home</AboutPage>
  </MemoryRouter>
);

describe('AboutPage', () => {
  it('should render', () => {
    mount(
      <MemoryRouter>
        <AboutPage>about</AboutPage>
      </MemoryRouter>
    );
  });
});