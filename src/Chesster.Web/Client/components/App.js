import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';

import theme from './themes/default';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';

injectGlobal`
  html, body {
    margin: 0;
    height: 100vh;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;