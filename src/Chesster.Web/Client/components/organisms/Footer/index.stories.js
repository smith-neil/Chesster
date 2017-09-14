import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Footer from '.';

storiesOf('Footer', module)
  .add('default usage', withInfo('')(() =>
    <Footer />
  ));