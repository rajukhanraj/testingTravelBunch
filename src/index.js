import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/style.scss';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import TagManager from 'react-gtm-module';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

const tagManagerArgs = {
  gtmId: 'GTM-NM4QSB7'
}

TagManager.initialize(tagManagerArgs)

const jsx = (
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.register();
