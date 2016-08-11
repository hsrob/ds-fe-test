import assign from 'lodash/assign';
import without from 'lodash/without';

const SELECT_RECIPE = 'SELECT_RECIPE';
const DESELECT_RECIPE = 'DESELECT_RECIPE';

const recipeSelectReducer = (state = [], action) => {
    switch(action.type){
        case SELECT_RECIPE:
            return state.indexOf(action.payload) === -1 ? 
            [
                ...state,
                action.payload
            ]
            : state;
        case DESELECT_RECIPE:
            return without(state, action.payload);
        default:
            return state;
    }
}

export default recipeSelectReducer;