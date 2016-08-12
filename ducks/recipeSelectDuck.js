import assign from 'lodash/assign';
import without from 'lodash/without';

// Action Types
const TOGGLE_SELECT_RECIPE = 'TOGGLE_SELECT_RECIPE';
const CLEAR_SELECTED_RECIPES = 'CLEAR_SELECTED_RECIPES';
export const ACTION_TYPES = { TOGGLE_SELECT_RECIPE, CLEAR_SELECTED_RECIPES };

// Actions
export const toggleSelectRecipe = (name) => ({
    type: TOGGLE_SELECT_RECIPE,
    payload: name
});
export const clearSelectedRecipes = (name) => ({
    type: CLEAR_SELECTED_RECIPES
});

// Reducer
const recipeSelectReducer = (state = [], action) => {
    switch(action.type){
        case TOGGLE_SELECT_RECIPE:
            return state.indexOf(action.payload) === -1 ? 
            [
                ...state,
                action.payload
            ]
            : without(state, action.payload);
        case CLEAR_SELECTED_RECIPES:
            return [];
        default:
            return state;
    }
}

export default recipeSelectReducer;