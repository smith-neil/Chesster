import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import AboutPage from '.';

storiesOf('AboutPage', module)
  .add('default usage', withInfo('')(() =>
    <AboutPage />
  ));