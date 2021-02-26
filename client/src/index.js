import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './store/configureStore';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

import App from './App';

const rootEl = document.getElementById('root');

const Init = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <App />
    </ThemeProvider>
  </Provider>
);

render(<Init />, rootEl);

if (module.hot) {
  module.hot.accept();
}
