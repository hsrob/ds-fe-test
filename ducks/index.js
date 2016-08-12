import { combineReducers } from 'redux';
import recipeSelectReducer from './recipeSelectDuck';
import ingredientFilterReducer from './ingredientFilterDuck';

export default combineReducers({
    ingredientFilter: ingredientFilterReducer,
    recipes: (state = [], action) => state,
    selections: recipeSelectReducer    
});