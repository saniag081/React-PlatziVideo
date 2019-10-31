import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';

ReactDOM.render(
    //inicialisar
    <Provider>
      <App />
    </Provider>,

    document.getElementById('app')
);