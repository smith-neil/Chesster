import React from 'react';
import { mount, shallow } from 'enzyme';

import Footer from '.';

const wrap = (props = {}) => shallow(
  <Footer {...props} />
);

describe('Footer', () => {
  it('should render', () => {
    mount(<Footer />);
  });

  it('should render props when passed in', () => {
    const wrapper = wrap({ id: 'foo' });

    expect(wrapper.find({ id: 'foo' })).toHaveLength(1);
  });
});