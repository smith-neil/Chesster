import React from 'react';
import { shallow, mount } from 'enzyme';

import AboutPage from '.';

const wrap = (props = {}) => shallow(
  <AboutPage {...props}>home</AboutPage>
);

describe('AboutPage', () => {
  it('should render', () => {
    mount(<AboutPage />);
  });
});