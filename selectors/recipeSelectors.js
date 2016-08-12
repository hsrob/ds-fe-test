import { createSelector } from 'reselect';
import flatMap from 'lodash/flatMap';
import uniq from 'lodash/uniq';

const getIngredientFilter = state => state.ingredientFilter;
const getRecipes = state => state.recipes;
const getSelections = state => state.selections;

const mapRecipeIngredientsSorted = recipes => uniq(flatMap(recipes, r => r.ingredients)).sort();

/**
 * If an {ingredientFilter} is applied, get recipes containing that ingredient, else get all recipes
 */
export const getIngredientFilteredRecipes = createSelector(
    [getRecipes, getIngredientFilter],
    (recipes, ingredientFilter) => 
        ingredientFilter !== '' ? 
            recipes.filter(r => r.ingredients.indexOf(ingredientFilter) > -1) 
            : recipes
);

/**
 * Get an array of currently selected recipes (out of the filtered recipes returned by input selector {getIngredientFilteredRecipes})
 */
const getSelectedRecipes = createSelector(
    [ getIngredientFilteredRecipes, getSelections ],
    (recipes, selections) => recipes.filter(r => (selections || []).indexOf(r.name) > -1) || []
);

/**
 * Map and flatten the array of ingredients needed for the currently selected recipes (from input selector {getSelectedRecipes})
 */
export const getSelectedRecipeIngredientsSorted = createSelector(
    getSelectedRecipes,
    mapRecipeIngredientsSorted
);

/**
 * Map and flatten the array of ingredients needed for all recipes (regardless of any {ingredientFilter} that may be applied)
 */
export const getAllRecipeIngredients = createSelector(
    getRecipes,
    mapRecipeIngredientsSorted
);