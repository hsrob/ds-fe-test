import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

import recipes from './recipes';
import rootReducer from './ducks'
import App from './components/App'

const enhancedReducer = compose(
  mergePersistedState()
)(rootReducer);

const storage = compose(
  filter(['ingredientFilter', 'selections'])
)(adapter(window.localStorage));

const storeEnhancer = compose(
  persistState(storage, 'dsi-fetest-rp'),
  window.devToolsExtension && window.devToolsExtension()
)

let store = createStore(
  enhancedReducer, 
  { ingredientFilter: '', recipes, selections: [] }, 
  storeEnhancer
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)