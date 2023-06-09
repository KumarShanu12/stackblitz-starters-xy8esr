import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
 

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Services/reducer/index'
const store=createStore(rootReducer)


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
