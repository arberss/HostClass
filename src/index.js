import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// debugger; // TO INSPECT THE PAGE BEFORE 1ST RENDER

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
