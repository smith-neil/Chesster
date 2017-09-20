import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-router';

import AboutPage from '.';

storiesOf('AboutPage', module)
  .addDecorator(StoryRouter())
  .add('default usage', withInfo('')(() =>
    <AboutPage />
  ));