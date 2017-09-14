import React from 'react';
import { shallow, mount } from 'enzyme';

import HomePage from '.';

const wrap = (props = {}) => shallow(
  <HomePage {...props}>home</HomePage>
);

describe('HomePage', () => {
  it('should render', () => {
    mount(<HomePage />);
  });
});