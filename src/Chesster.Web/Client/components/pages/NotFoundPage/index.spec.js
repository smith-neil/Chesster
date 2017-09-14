import React from 'react';
import { shallow, mount } from 'enzyme';

import NotFoundPage from '.';

const wrap = () => shallow(
  <NotFoundPage />
);

describe('NotFoundPage', () => {
  it('should mount', () => {
    mount(<NotFoundPage />);
  });
});