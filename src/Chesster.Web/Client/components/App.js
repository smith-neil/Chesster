import React, { Component } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

import theme from './themes/default';

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
        <h1>VRBO test</h1>
      </ThemeProvider>
    );
  }
}

export default App;