import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
require('dotenv').config({path: "../../.env"})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
        <App/>
      </BrowserRouter>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
