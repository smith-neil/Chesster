import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-router';

import HomePage from '.';

storiesOf('HomePage', module)
  .addDecorator(StoryRouter())
  .add('default usage', withInfo('')(() =>
    <HomePage />
  ));