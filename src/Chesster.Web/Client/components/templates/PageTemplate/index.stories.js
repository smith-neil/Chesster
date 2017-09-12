import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import PageTemplate from '.';

storiesOf('PageTemplate', module)
  .add('default usage', withInfo('This is the basic usage using only a header, footer, and children.')(() =>
    <PageTemplate header="header" footer="footer">children</PageTemplate>
  ))
  .add('with hero', withInfo('Usage showing adding a [hero] section to the template.')(() =>
    <PageTemplate header="header" hero="hero" footer="footer">children</PageTemplate>
  ));