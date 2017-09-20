import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-router';

import Header from '.';

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .add('default usage', withInfo('')(() =>
    <Header />
  ));