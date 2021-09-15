import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducer/index'

const persistConfig={
  key:'root',
  storage: storage,
  blacklist:['search']
}

const preducer=persistReducer(persistConfig,reducers)
const store=createStore(preducer,composeWithDevTools(applyMiddleware(thunk)))
const persistor=persistStore(store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

