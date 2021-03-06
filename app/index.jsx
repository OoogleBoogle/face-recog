import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import {Provider} from 'react-redux';
import store from './redux/store';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>, document.querySelector('.app'));
});
