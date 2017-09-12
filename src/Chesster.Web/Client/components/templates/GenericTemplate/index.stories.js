import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GenericTemplate from '.';

storiesOf('GenericTemplate', module)
  .add('default usage', withInfo('')(() =>
    <GenericTemplate>children</GenericTemplate>
  ));