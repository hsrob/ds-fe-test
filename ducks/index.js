import { combineReducers } from 'redux';
import recipeSelectReducer from './recipeSelect';

export default combineReducers({
    selections: recipeSelectReducer,
    recipes: (state = [], action) => state
});