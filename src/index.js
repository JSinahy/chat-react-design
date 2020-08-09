import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/js/App';
import Header from './components/js/header';
import Bottom from './components/js/bottom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Bottom />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
