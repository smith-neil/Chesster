import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import NotFoundPage from '.';

storiesOf('NotFoundPage', module)
  .add('default usage', withInfo('')(() =>
    <NotFoundPage />
  ));