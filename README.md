Robert Parker's DataScience Frontend Code Test
==================

This application uses React and Redux to render the (V)DOM and maintain application state.

## Instructions

* Clone this repo
* `npm install` to install libs, then `node server.js` to run the webpack development server
* Go to `localhost:3000` to use the application!

## Additional Lib Info
* react libs
  * `react-bootstrap` - Bootstrap re-implemented in React.
  * `react-redux` - React bindings for redux
* redux libs
  * `redux-localstorage` - Persist Redux store state locally (and optionally rehydrate).
  * `reselect` - Memoized selectors to compute derived data from the Redux store
* general libs
  * `lodash` - General utility library
  
## Requirements

Using the provided JSON data representing a collection of meal recipes, create a micro frontend application that meets the following criteria:

- [x] Display a list (or table) of recipes.
- [x] Allow filtering of recipes by a single ingredient.
- [x] Add checkboxes to allow selection of multiple recipes.
- [x] Show an alphabetically ordered list of distinct ingredients for the selected recipes. This should update as recipes are selected / unselected.
- [x] Persist the selections locally and regenerate the view on page refresh.
- [x] In a README note any required setup to be able to run the app, such as modifying hosts file, etc.