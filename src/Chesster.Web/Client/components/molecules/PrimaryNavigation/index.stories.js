import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-router';

import PrimaryNavigation from '.';

storiesOf('PrimaryNavitation', module)
  .addDecorator(StoryRouter())
  .add('default usage', withInfo('')(() =>
    <PrimaryNavigation />
  ));