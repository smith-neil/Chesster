import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from 'react-storybook-addon-props-combinations';

const req = require.context('../Client/components', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setDefaults({

});

configure(loadStories, module);