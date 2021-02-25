import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

import App from './App';

const rootEl = document.getElementById('root');

store.dispatch.media.fetchMedia();

const Init = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

render(<Init />, rootEl);

if (module.hot) {
  module.hot.accept();
}
