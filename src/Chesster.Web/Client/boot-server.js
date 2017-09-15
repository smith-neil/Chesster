import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createServerRenderer } from 'aspnet-prerendering';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { AppContainer } from 'react-hot-loader';
import configureStore from './configureStore';

import App from './components/App';

export default createServerRenderer(params => {
  return new Promise((resolve, reject) => {
    const history = createMemoryHistory();
    const store = configureStore(history);

    const context = {};
    const app = (
      <AppContainer>
        <Provider store={store}>
          <StaticRouter location={params.location} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </AppContainer>
    );

    renderToString(app);

    if (context.url) {
      resolve({ redirectUrl: context.url });
      return;
    }

    params.domainTasks.then(() => {
      resolve({
        html: renderToString(app)
      });
    }, reject);
  });
});