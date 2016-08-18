import { combineReducers } from 'redux';
import recipeSelectReducer from './recipeSelectDuck';
import ingredientFilterReducer from './ingredientFilterDuck';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    ingredientFilter: ingredientFilterReducer,
    recipes: (state = [], action) => state,
    routing: routerReducer,
    selections: recipeSelectReducer    
});