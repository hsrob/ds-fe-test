import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import compose from 'lodash/compose';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

import recipes from './recipes';
import rootReducer from './ducks'
import App from './components/App'
import RecipeList from './containers/RecipeList';

const enhancedReducer = compose(
  mergePersistedState()
)(rootReducer);

const storage = compose(
  filter(['ingredientFilter', 'selections'])
)(adapter(window.localStorage));

const storeEnhancer = compose(
  applyMiddleware(routerMiddleware(browserHistory)),
  persistState(storage, 'dsi-fetest-rp'),
  window.devToolsExtension && window.devToolsExtension()
)

let store = createStore(
  enhancedReducer, 
  { ingredientFilter: '', recipes, routing: {}, selections: [] }, 
  storeEnhancer
)

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={RecipeList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)