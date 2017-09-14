import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Hero from '.';

storiesOf('Hero', module)
  .add('default usage', withInfo('')(() =>
    <Hero />
  ));