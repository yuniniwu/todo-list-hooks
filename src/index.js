import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListApp from './TodoListApp';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './constants/style.js';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoListApp />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
