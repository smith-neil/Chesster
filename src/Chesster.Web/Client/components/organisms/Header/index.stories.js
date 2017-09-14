import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Header from '.';

storiesOf('Header', module)
  .add('default usage', withInfo('')(() =>
    <Header />
  ));