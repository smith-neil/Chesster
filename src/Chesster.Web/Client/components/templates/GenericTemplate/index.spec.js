import React from 'react';
import { mount, shallow } from 'enzyme';

import GenericTemplate from '.';

const wrap = (props = {}) => shallow(
  <GenericTemplate {...props}>test</GenericTemplate>
);

describe('GenericTemplate', () => {
  it('should mount', () => {
    mount(<GenericTemplate>test</GenericTemplate>);
  });

  it('should render children when passed in', () => {
    const wrapper = wrap();

    expect(wrapper.contains('test')).toBe(true);
  });
});