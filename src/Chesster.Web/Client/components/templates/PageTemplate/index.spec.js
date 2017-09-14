import React from 'react';
import { mount, shallow } from 'enzyme';

import PageTemplate from '.';

const wrap = (props = {}) => shallow(
  <PageTemplate header="header" footer="footer" {...props}>test</PageTemplate>
);

describe('PageTemplate', () => {
  it('should mount', () => {
    mount(<PageTemplate header="header" footer="footer">test</PageTemplate>);
  });

  it('should render children when passed in', () => {
    const wrapper = wrap();

    expect(wrapper.contains('test')).toBe(true);
  });

  it('should render a header', () => {
    const wrapper = wrap();

    expect(wrapper.contains('header')).toBe(true);
  });

  it('should render a hero', () => {
    const wrapper = wrap({ hero: 'hero' });

    expect(wrapper.contains('hero')).toBe(true);
  });

  it('should not render a hero by default', () => {
    const wrapper = wrap();

    expect(wrapper.contains('hero')).toBe(false);
  });

  it('should render a footer', () => {
    const wrapper = wrap();

    expect(wrapper.contains('footer')).toBe(true);
  });
});