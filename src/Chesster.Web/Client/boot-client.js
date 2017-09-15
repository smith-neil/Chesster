import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import App from './components/App';
import DevTools from 'molecules/DevTools';

const history = createBrowserHistory();
const store = configureStore(history);

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('mount-point'));

  ReactDOM.render(
    <Provider store={store}>
      <DevTools />
    </Provider>,
    document.getElementById('dev-tools'));
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    renderApp(NextApp);
  });
}