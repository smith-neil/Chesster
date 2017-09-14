import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import HomePage from '.';

storiesOf('HomePage', module)
  .add('default usage', withInfo('')(() =>
    <HomePage />
  ));