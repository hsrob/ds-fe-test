import assign from 'lodash/assign';
import without from 'lodash/without';

// Action Types
const TOGGLE_SELECT_RECIPE = 'TOGGLE_SELECT_RECIPE';
export const ACTION_TYPES = { TOGGLE_SELECT_RECIPE };

// Actions
export const toggleSelectRecipe = (name) => ({
    type: TOGGLE_SELECT_RECIPE,
    payload: name
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
        default:
            return state;
    }
}

export default recipeSelectReducer;