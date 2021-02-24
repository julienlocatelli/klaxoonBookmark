import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import App from './App';
import theme from '../assets/theme';
import store from './store/configureStore';

const Init: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<Init />, document.getElementById('root'));
