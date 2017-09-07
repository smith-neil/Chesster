import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServerRenderer } from 'aspnet-prerendering';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

export default createServerRenderer(params => {
  return new Promise((resolve, reject) => {
    const app = (
      <AppContainer>
        <App />
      </AppContainer>
    );

    renderToString(app);

    params.domainTasks.then(() => {
      resolve({
        html: renderToString(app)
      });
    }, reject);
  });
});