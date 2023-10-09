import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from './redux/middelwares';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/reducers/rootReducer';

const middelwares = compose(applyMiddleware(thunk,logger),composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer,middelwares);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

