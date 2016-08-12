import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import recipes from './recipes';
import recipeDucks from './ducks'
import App from './components/App'

let store = createStore(
  recipeDucks, 
  { ingredientFilter: '', recipes, selections: [] }, 
  window.devToolsExtension && window.devToolsExtension()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)