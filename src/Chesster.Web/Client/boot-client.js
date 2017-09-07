import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('mount-point'));
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    renderApp(NextApp);
  });
}