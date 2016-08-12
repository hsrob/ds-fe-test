import assign from 'lodash/assign';
import without from 'lodash/without';

// Action Types
const APPLY_INGREDIENT_FILTER = 'APPLY_INGREDIENT_FILTER';
const CLEAR_INGREDIENT_FILTER = 'CLEAR_INGREDIENT_FILTER';
export const ACTION_TYPES = { APPLY_INGREDIENT_FILTER, CLEAR_INGREDIENT_FILTER };

// Actions
export const applyIngredientFilter = (ingredient) => ({
    type: APPLY_INGREDIENT_FILTER,
    payload: ingredient
});
export const clearIngredientFilter = (ingredient) => ({
    type: CLEAR_INGREDIENT_FILTER
});

// Reducer
const ingredientFilterReducer = (state = '', action) => {
    switch(action.type){
        case APPLY_INGREDIENT_FILTER:
            return action.payload;
        case CLEAR_INGREDIENT_FILTER:
            return '';
        default:
            return state;
    }
}

export default ingredientFilterReducer;