import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import { Provider } from 'mobx-react';
import todoStore from './Store/todoStore';
const store = {
  todoStore: new todoStore()
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
